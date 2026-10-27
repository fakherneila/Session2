import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./src/store/store";
import {
  increment,
  decrement,
  reset,
  addFive,
  multiplyByTwo,
} from "./src/store/counterSlice";

// 1. Composant d'affichage (utilise useSelector)
function CompteurAffiche() {
  const valeur = useSelector((state) => state.counter.value);
  return <Text style={styles.nombre}>Valeur : {valeur}</Text>;
}

// Bonus du RN8.7 : StatutCompteur
function StatutCompteur() {
  const valeur = useSelector((state) => state.counter.value);
  return (
    <Text style={styles.statut}>
      {valeur === 0 ? "Compteur nul" : "Compteur actif"}
    </Text>
  );
}

// 2. Composant de commandes (utilise useDispatch)
function CommandesCompteur() {
  const dispatch = useDispatch();
  return (
    <View style={styles.commandes}>
      <Button title="+1" onPress={() => dispatch(increment())} />
      <Button
        title="-1"
        onPress={() => dispatch(decrement())}
        color="#ef4444"
      />
      <Button title="+5" onPress={() => dispatch(addFive())} color="#10B981" />
      <Button
        title="x2"
        onPress={() => dispatch(multiplyByTwo())}
        color="#f59e0b"
      />
      <Button title="Reset" onPress={() => dispatch(reset())} color="#64748B" />
    </View>
  );
}

// 3. Écran principal
function EcranPrincipal() {
  return (
    <View style={styles.page}>
      <Text style={styles.titre}>Flux / Redux Toolkit</Text>
      <CompteurAffiche />
      <CompteurAffiche />
      <StatutCompteur />
      <CommandesCompteur />
    </View>
  );
}

// 4. Le Provider englobe tout pour donner accès au store
export default function App() {
  return (
    <Provider store={store}>
      <EcranPrincipal />
    </Provider>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  titre: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  nombre: {
    fontSize: 25,
    textAlign: "center",
    marginVertical: 6,
    fontWeight: "bold",
  },
  statut: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#64748B",
    fontStyle: "italic",
  },
  commandes: {
    gap: 12,
    marginTop: 20,
  },
});
