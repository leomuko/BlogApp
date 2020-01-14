import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/blogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {
    const { state, addBlogPost, deleteBlogPost } = useContext(Context);

    return (
        <View>

            <Button
                title="Add Post"
                onPress={addBlogPost}
            />
            <FlatList
                data={state}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({ item }) => {
                    return <View style={styles.row}>
                        <Text style={styles.title}>{item.title} -- id {item.id}</Text>
                        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                            <Feather name="trash" style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                }
                }
            />
        </View>
    )
}
const styles = StyleSheet.create({
    row: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 20
    }
});

export default IndexScreen;