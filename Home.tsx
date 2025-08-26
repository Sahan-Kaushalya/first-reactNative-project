import { StyleSheet, View ,Text } from "react-native";

export default function Home(){
    return(
    <View style={styles.view1}>
        <Text style={styles.text1}>Hello Ishara</Text>
    </View>
);

}

const styles = StyleSheet.create(
    {
        view1:{
            flex:1,
            alignItems:"center",
            backgroundColor:"#004680ff",
            justifyContent: 'center'
        },

        text1:{
            fontWeight: 'bold',
            color:"#fff"
        }
    }
);
