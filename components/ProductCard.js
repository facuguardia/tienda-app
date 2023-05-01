import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import tw from "twrnc";

export default function ProductCard({
  image,
  title,
  price,
  category,
  description,
}) {
  const [count, setCount] = React.useState(1);
  return (
    <View style={tw`w-full bg-white rounded-3xl p-5 my-5`}>
      <View style={tw`bg-white rounded-xl`}>
        <Image
          source={{ uri: image }}
          style={tw`w-full h-72`}
          resizeMode="contain"
        />
      </View>
      <View style={tw`mt-5`}>
        <Text style={tw`text-sm text-black/60`}>
          {category}
        </Text>
        <Text style={tw`text-lg font-semibold`}>{title}</Text>
        <View style={tw`flex-row justify-between my-3`}>
          <View style={tw`flex-row items-center gap-3`}>
            <AntDesign
              name="minuscircleo"
              size={24}
              color={"#000"}
              onPress={() => setCount(count - 1)}
            />
            <Text style={tw`text-xl`}>{count}</Text>
            <AntDesign
              name="pluscircleo"
              size={24}
              color={"#000"}
              onPress={() => setCount(count + 1)}
            />
          </View>
          <Text style={tw`text-2xl font-extrabold`}>
            ${price * count}
          </Text>
        </View>
        <Text
          numberOfLines={3}
          style={tw`text-sm text-black/60`}
          >
            {description}
        </Text>
      </View>
      <TouchableOpacity style={tw`flex-row justify-center w-10/12 self-center mt-5 bg-black`}>
        <Text style={tw`text-white font-bold p-3 rounded-full`}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}
