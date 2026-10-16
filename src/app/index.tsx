import { useEffect, useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

function PracticeTracker({
  solved,
  onSolve,
  onReset,
}: {
  solved: number;
  onSolve: () => void;
  onReset: () => void;
}) {
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Practice Tracker</Text>
      <Text style={styles.counter}>Solved: {solved}</Text>

      <Pressable style={styles.button} onPress={onSolve}>
        <Text style={styles.buttonText}>Solve +1</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={onReset}>
        <Text style={styles.buttonText}>Reset</Text>
      </Pressable>

      {solved >= 5 && <Text style={styles.success}>Great job!</Text>}
    </View>
  );
}

function useStopwatch(isRunning: boolean) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  return seconds;
}

function Stopwatch({
  seconds,
  isRunning,
}: {
  seconds: number;
  isRunning: boolean;
}) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const time =
    String(minutes).padStart(2, "0") +
    ":" +
    String(remainingSeconds).padStart(2, "0");

  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Stopwatch</Text>
      <Text style={styles.timer}>{time}</Text>
      <Text style={styles.status}>{isRunning ? "Running..." : "Paused"}</Text>
    </View>
  );
}

export default function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const seconds = useStopwatch(isRunning);

  function handleSolve() {
    setSolved((s) => s + 1);
  }

  function handleReset() {
    setSolved(0);
  }

  function toggleTimer() {
    setIsRunning((running) => !running);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lab Timer & Practice Tracker</Text>

      <PracticeTracker
        solved={solved}
        onSolve={handleSolve}
        onReset={handleReset}
      />

      <Stopwatch seconds={seconds} isRunning={isRunning} />

      <Pressable style={styles.button} onPress={toggleTimer}>
        <Text style={styles.buttonText}>{isRunning ? "Stop" : "Start"}</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    gap: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#222222",
  },
  section: {
    padding: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 12,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  counter: {
    fontSize: 18,
  },
  timer: {
    fontSize: 32,
    fontWeight: "bold",
  },
  status: {
    fontSize: 16,
  },
  button: {
    backgroundColor: "#2563eb",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  success: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
