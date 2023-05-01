import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import tw from "twrnc";
import ProductsList from "./components/ProductsList";

export default function App() {
  return (
    <SafeAreaView style={tw`bg-gray-200 flex-1 items-center justify-center pt-10`}>
      <View style={tw`flex-row w-full justify-center p-2`}>
        <Text style={tw`text-4xl font-bold`}>
          New collection
        </Text>
      </View>
      <ProductsList />
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}
