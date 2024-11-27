import { Image, StyleSheet } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

// Agora
import "expo-dev-client";
import React, { useState } from "react";
import AgoraUIKit, { AgoraUIKitProps  } from "agora-rn-uikit";
import { View } from "react-native-reanimated/lib/typescript/Animated";

export default function CallsScreen() {
  const [videoCall, setVideoCall] = useState(true);

  const props: AgoraUIKitProps = {
    connectionData: {
      appId: "5236464cdfc5455e812b9bfe8976e7cb",
      channel: "test",
    },
    rtcCallbacks: {
      EndCall: () => setVideoCall(false),
    },
  };
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Calls Screen!</ThemedText>
        <View>
          {videoCall ? (
            <AgoraUIKit
              connectionData={props.connectionData}
              rtcCallbacks={props.rtcCallbacks}
            />
          ) : null}
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
