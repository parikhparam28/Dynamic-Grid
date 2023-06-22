import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, Dimensions } from "react-native";
import { FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const MARGIN = 1;

export default ImageGridTemp = () => {

    let images = [
        {
            uri: 'file:///Users/ppvishal/Library/Developer/CoreSimulator/Devices/7F4EBC8A-042C-4A97-9DB3-3D6B75B261C8/data/Containers/Data/Application/6DB56ABB-74A4-47E4-A33D-F8633046060D/tmp/react-native-image-crop-picker/4214DDBF-6EF4-446F-AE20-12AFDB536726.jpg',
        },
        {
            uri: 'file:///Users/ppvishal/Library/Developer/CoreSimulator/Devices/7F4EBC8A-042C-4A97-9DB3-3D6B75B261C8/data/Containers/Data/Application/6DB56ABB-74A4-47E4-A33D-F8633046060D/tmp/react-native-image-crop-picker/4214DDBF-6EF4-446F-AE20-12AFDB536726.jpg',
        },
        {
            uri: 'file:///Users/ppvishal/Library/Developer/CoreSimulator/Devices/7F4EBC8A-042C-4A97-9DB3-3D6B75B261C8/data/Containers/Data/Application/6DB56ABB-74A4-47E4-A33D-F8633046060D/tmp/react-native-image-crop-picker/4214DDBF-6EF4-446F-AE20-12AFDB536726.jpg',
        },
        {
            uri: 'file:///Users/ppvishal/Library/Developer/CoreSimulator/Devices/7F4EBC8A-042C-4A97-9DB3-3D6B75B261C8/data/Containers/Data/Application/6DB56ABB-74A4-47E4-A33D-F8633046060D/tmp/react-native-image-crop-picker/4214DDBF-6EF4-446F-AE20-12AFDB536726.jpg',
        },
        {
            uri: 'file:///Users/ppvishal/Library/Developer/CoreSimulator/Devices/7F4EBC8A-042C-4A97-9DB3-3D6B75B261C8/data/Containers/Data/Application/6DB56ABB-74A4-47E4-A33D-F8633046060D/tmp/react-native-image-crop-picker/4214DDBF-6EF4-446F-AE20-12AFDB536726.jpg',
        },
        {
            uri: 'file:///Users/ppvishal/Library/Developer/CoreSimulator/Devices/7F4EBC8A-042C-4A97-9DB3-3D6B75B261C8/data/Containers/Data/Application/6DB56ABB-74A4-47E4-A33D-F8633046060D/tmp/react-native-image-crop-picker/4214DDBF-6EF4-446F-AE20-12AFDB536726.jpg',
        },
        {
            uri: 'file:///Users/ppvishal/Library/Developer/CoreSimulator/Devices/7F4EBC8A-042C-4A97-9DB3-3D6B75B261C8/data/Containers/Data/Application/6DB56ABB-74A4-47E4-A33D-F8633046060D/tmp/react-native-image-crop-picker/4214DDBF-6EF4-446F-AE20-12AFDB536726.jpg',
        },
        {
            uri: 'file:///Users/ppvishal/Library/Developer/CoreSimulator/Devices/7F4EBC8A-042C-4A97-9DB3-3D6B75B261C8/data/Containers/Data/Application/6DB56ABB-74A4-47E4-A33D-F8633046060D/tmp/react-native-image-crop-picker/4214DDBF-6EF4-446F-AE20-12AFDB536726.jpg',
        },
       
    ];

    const [ imageWidth, setImageWidth] = useState(Dimensions.get('window').width-2*MARGIN);
    const [ columns, setColumns] = useState(1);
    const [ rows, setRows] = useState(2000);


    const imageWidthHandler = (cols) => {
        const screenWidth = Dimensions.get('window').width;
        let imageWidth = ((screenWidth-2*MARGIN)-(cols-1)*MARGIN)/cols;
        console.log('Changed width: ', imageWidth);
        setImageWidth(imageWidth); 
    } 
    
    const onChangeText = (columns) => {
        if(columns.length === 0)
            columns="1";
        setColumns(columns)                            
        imageWidthHandler(columns);
    }

    const renderItem = ({item,index}) => {
        console.log(item)
        if(index < rows*columns)
            return(<Image source={{uri: item.uri}} style={[styles.image, {height: imageWidth, width: imageWidth,}]}/>)
        return null;
    }

    return(
        <View style={styles.container}>
            <View>
                <View style={styles.dirView}>
                    <Text style={styles.dirText}>Columns:</Text>
                    <TextInput
                        placeholder="Type column number"
                        onChangeText={onChangeText}
                        keyboardType='numeric'
                        maxLength={1} 
                    />
                </View>
                <View style={styles.dirView}>
                    <Text style={styles.dirText}>Rows:</Text>
                    <TextInput
                        placeholder="Type row number"
                        onChangeText={setRows}
                        keyboardType='numeric'
                    />
                </View>
            </View>
            <ScrollView style={styles.imageRowScroll}>
                <FlatList
                    key={columns + rows}
                    data={images}
                    renderItem= {renderItem}
                    columnWrapperStyle={ columns>1?.styles.columnWrapper}
                    contentContainerStyle={styles.contentContainer}
                    numColumns={columns}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    dirView: {
        flexDirection: 'row' , 
        margin: 10,
    },
    dirText: {
        marginRight: 10,
    },
    imageRowScroll: {
        marginLeft: 1,
        marginRight: 1,
    },
    image: {
        margin: MARGIN,
    },
    columnWrapper: {
        flexDirection: 'row',
    },
    contentContainer: {
        alignContent: 'center',
        paddingTop: 10,
    },
})










