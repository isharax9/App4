import { Link, router } from "expo-router";
import { View, Text, Button } from "react-native";

export default function Index() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
            <Text>Hello Index.js</Text>

            <Link href={"/home"} > Go To Home </Link>

            <Button title="Go To Home" onPress={
                () => {
                    router.push("/home");

                }
            } />

        </View>
    );
}
