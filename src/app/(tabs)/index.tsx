import "@/global.css";
import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView
      className="flex-1 bg-background"
      edges={["top", "left", "right"]}
    >
      <Text className="text-xl font-bold text-success">Welcome!</Text>
      <Link href="/onboarding" className="mt-4 rounded bg-[red] p-4 text-white">
        Go to Onboarding
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="mt-4 rounded bg-[red] p-4 text-white"
      >
        Go to Sign in
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="mt-4 rounded bg-[red] p-4 text-white"
      >
        Go to Sign up
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="mt-4 rounded bg-[red] p-4 text-white"
      >
        Subscriptions
      </Link>
      <Link
        href={{
          pathname: "/(tabs)/subscriptions/[id]",
          params: { id: "claude" },
        }}
        className="mt-4 rounded bg-[red] p-4 text-white"
      >
        Go Claude Subscriptions
      </Link>
    </SafeAreaView>
  );
}
