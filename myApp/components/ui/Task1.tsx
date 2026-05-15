import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from "react-native";

export default function Task() {
  const [text, setText] = useState("");
  const [items, setItems] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleAddOrEdit = () => {
    if (text.trim() === "") return;

    if (editIndex !== null) {
      const updatedItems = [...items];
      updatedItems[editIndex] = text;
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      setItems([...items, text]);
    }
    setText("");
  };

  const handleEdit = (index: number) => {
    setText(items[index]);
    setEditIndex(index);
  };

  const handleDelete = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    if (editIndex === index) {
      setEditIndex(null);
      setText("");
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter text..."
        value={text}
        onChangeText={setText}
      />
      <Button title={editIndex !== null ? "Update" : "Add"} onPress={handleAddOrEdit} />

      <FlatList
        data={items}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.itemRow}>
            <Text style={styles.itemText}>{item}</Text>
            <TouchableOpacity onPress={() => handleEdit(index)} style={styles.editBtn}>
              <Text>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDelete(index)} style={styles.deleteBtn}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
  itemRow: { flexDirection: "row", alignItems: "center", marginVertical: 5 },
  itemText: { flex: 1, fontSize: 16 },
  editBtn: { backgroundColor: "#0011ff", padding: 5, marginHorizontal: 5 },
  deleteBtn: { backgroundColor: "#d0dd5c", padding: 5 }
});
