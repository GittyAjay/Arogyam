import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { DEFAUTL_SPACE, FONT_MID, ICON_SIZE, INLINE_GAP } from '../../assets/sizes';
import Faicon from 'react-native-vector-icons/FontAwesome';
import Ioicon from 'react-native-vector-icons/Ionicons';
import PrimaryButton from '../../components/PrimaryButton';
import { BLACK, PRIMARY, WHITE } from '../../assets/colors';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob'
import PDFView from 'react-native-view-pdf';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { MediaType } from 'react-native-image-picker';
import AwesomeLoading from 'react-native-awesome-loading';
import PdfThumbnail from "react-native-pdf-thumbnail";
import { styles } from './style';
import { NUNITO_BOLD, NUNITO_REGULAR } from '../../assets/fontnames';
import { globalstyles } from '../../globalcss';
const index = (props: { navigation: { pop: Function, push: Function } }) => {
    const [loading, setLoading] = React.useState<{ status: boolean, message: string }>({
        status: false,
        message: "uploding"
    });
    const [options, setOptions] = React.useState<{
        title: String,
        customButtons: Array<{}>,
        storageOptions: {},
        mediaType: MediaType
    }>({
        title: 'Select Image',
        customButtons: [
            {
                name: 'customOptionKey',
                title: 'Choose file from Custom Option'
            },
        ],
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
        mediaType: 'photo'
    });
    const [resourcePath, setResourcePath] = React.useState<any>();
    const [fileThumbnail, setFileThumbnail] = React.useState({
        uri: "",
        width: 0,
        height: 0
    });
    const [fileName, setFileName] = React.useState<any>();
    const pickFile = async () => {
        setLoading({ status: true, message: "uploading" });
        try {
            const File = await DocumentPicker.pick({
                type: [DocumentPicker.types.pdf],
            });
            const result = await RNFetchBlob.fs.readFile(File[0].uri, 'base64');
            const { uri, width, height } = await PdfThumbnail.generate(File[0].uri, 0);
            setFileThumbnail({
                uri,
                width,
                height
            });
            uploadFile(result, File);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                setLoading({ status: false, message: "Error" + err });
            } else {
                throw err;
            }
        }
    }
    const uploadFile = async (result: any, file: any) => {
        console.log(file);
        setLoading({ status: false, message: "Submited" });
    }
    const cameraOrGallery = (cameraOrGallery: string) => {
        if (cameraOrGallery == 'camera')
            launchCamera(options, (res) => {
                try {
                    res.assets.map(val => {
                        const { uri, fileName, width, height } = val;
                        setResourcePath(uri);
                        setFileName(fileName);
                        setFileThumbnail({ uri: uri, width: width, height: height })
                    })
                } catch (error) {
                    console.log(error);
                }

            })
        else
            launchImageLibrary(options, res => {
                try {
                    console.log(res);
                    setResourcePath(res.assets[0].uri)
                    const { uri, width, height } = res.assets[0]
                    setFileThumbnail({ uri: uri, width: width, height: height })
                } catch (error) {
                    console.log(error);

                }
            })
    }
    const getFileName = (name, path) => {
        if (name != null) { return name; }
        return path.split("/").pop();
    }
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: PRIMARY }}>
                <View style={styles.top__header}>
                    <TouchableOpacity style={{ flexDirection: 'row', paddingRight: DEFAUTL_SPACE }} onPress={() => props.navigation.pop()}>
                        <Ioicon name="arrow-back" size={ICON_SIZE + 5} color={WHITE} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={{ color: WHITE, fontSize: FONT_MID, fontFamily: NUNITO_BOLD }}>Uplode prescription</Text>
                        <Text style={{ color: WHITE, fontFamily: NUNITO_REGULAR }}>have a priscription ? uplode here</Text>
                    </View>
                </View>
            </View>
            <View style={{ justifyContent: 'space-between', flex: 1, padding: INLINE_GAP }}>
                <View>
                    <View style={[styles.options, { marginBottom: DEFAUTL_SPACE }]}>
                        <TouchableOpacity style={{ flexDirection: 'column', alignItems: 'center' }} onPress={() => cameraOrGallery("camera")}>
                            <Ioicon name="camera" size={ICON_SIZE} color={WHITE} />
                            <Text style={[globalstyles.description, { color: WHITE }]}>Camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'column', alignItems: 'center' }} onPress={() => cameraOrGallery("gallery")}>
                            <Faicon name="photo" size={ICON_SIZE} color={WHITE} />
                            <Text style={[globalstyles.description, { color: WHITE }]}>Gallery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'column', alignItems: 'center' }} onPress={pickFile}>
                            <Faicon name="file-text-o" size={ICON_SIZE} color={WHITE} />
                            <Text style={[globalstyles.description, { color: WHITE }]}>Your prescription</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={[globalstyles.heading, { fontSize: FONT_MID }]}>priscription uplode guide here</Text>
                        <Text style={globalstyles.description}>uplode clear image</Text>
                        <Text style={globalstyles.description}>below mention point sould be a part of valid precription</Text>
                    </View>
                    <TouchableOpacity style={{ marginTop: INLINE_GAP }}>
                        <Image source={fileThumbnail.uri === "" ? require("../../assets/images/pdfFormate.png") : { uri: fileThumbnail.uri }} style={{ width: 200, height: 200 }} />
                    </TouchableOpacity>
                </View>
                <PrimaryButton text_style={globalstyles.button__text} onPress={() => { props.navigation.push('Order') }} title="submit" />
            </View>
            <AwesomeLoading indicatorId={8} size={50} isActive={loading.status} text={loading.message} />
        </View>
    )
}

export default index

