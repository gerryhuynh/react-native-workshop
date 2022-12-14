import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const DetailsScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.talkDetails}>
                <Text style={styles.title}>Talk title</Text>
                <Text style={styles.time}>Date & time</Text>
                <Text style={styles.description}>
                    Talk description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in vehicula tortor. Sed 
                    mattis, quam eu dictum tempus, magna nisl fermentum mi, sit amet luctus felis augue sit amet massa. 
                    Aliquam eu mauris rhoncus lorem porta ultrices. Class aptent taciti sociosqu ad litora torquent per 
                    conubia nostra, per inceptos himenaeos. Sed hendrerit porttitor massa ac aliquam. Duis porta interdum 
                    aliquet. Quisque eu volutpat lorem, ac hendrerit eros
                </Text>
            </View>
            <View style={styles.speaker}>
                <Image 
                    style={styles.avatar}
                    source={{ uri: "https://picsum.photos/id/365/80/80.jpg" }}
                />
                <View>
                    <Text style={styles.speakerName}>Speaker name</Text>
                    <Text style={styles.speakerRole}>Job title</Text>
                </View>
            </View>
        </View>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    talkDetails: {
        paddingVertical: 48,
        paddingHorizontal: 24,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "#ccc",
    },
    title: {
        fontSize: 36,
        fontWeight: "700",
    },
    time: {
        fontWeight: "700",
        marginTop: 16,
    },
    description: {
        marginTop: 8,
    },
    speaker: {
        padding: 16,
        borderRadius: 8,
        shadowOffset: { width: 0, height: 15 },
        shadowOpacity: 0.25,
        shadowRadius: 28,
        elevation: 3,
        shadowColor: "#000",
        flexDirection: "row",
        backgroundColor: "#fff",
        marginTop: 24,
        marginHorizontal: 24,
        alignItems: "center",
    },
    avatar: {
        height: 80,
        width: 80,
        borderRadius: 80,
        marginRight: 16,
    },
    speakerName: {
        fontSize: 16,
        fontWeight: "700",
        marginBottom: 4,
    },
    speakerRole: {
        fontSize: 11,
    },
});
