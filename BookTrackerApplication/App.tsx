import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  Alert,
} from 'react-native';

// Define a TypeScript interface for a book object
interface Book {
  title: string;
  author: string;
  genre: string;
  pages: string;
}

const App = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [pages, setPages] = useState('');

  const [totalPages, setTotalPages] = useState(0);
  const [books, setBooks] = useState<Book[]>([]); // Specify the type of the "books" state

  const addBook = () => {
    if (title === '' || author === '' || genre === '' || pages === '') {
      Alert.alert('You may have missed out filling a field, please fill in your details in ALL THE FIELDS!');
      return;
    }

    const newBook: Book = { title, author, genre, pages }; // Define newBook using the Book interface
    setBooks([newBook, ...books]);

    const newTotalPages = parseInt(pages) + totalPages;
    setTotalPages(newTotalPages);

    const avgPages = newTotalPages / (books.length + 1);
    console.log(`Average pages: ${avgPages}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Author"
        onChangeText={(text) => setAuthor(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Genre"
        onChangeText={(text) => setGenre(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Number of Pages"
        onChangeText={(text) => setPages(text)}
      />
      <Button title="Add Book" onPress={addBook} />
      <FlatList
        data={books}
        renderItem={({ item }) => (
          <Text style={styles.book}>
            {item.title} by {item.author} - {item.genre} - {item.pages} pages
          </Text>
        )}
        keyExtractor={(item) => item.title}
      />
      <Text style={styles.stats}>
        Total Pages: {totalPages} - Average Pages: {(totalPages / books.length).toFixed(2)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    padding: 28,
  },
  input: {
    height: 45,
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 15,
  },
  book: {
    fontSize: 19,
    marginBottom: 15,
  },
  stats: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default App;

// due to multiple code errors and gradle failures, the use of Ai has been implemented in the build of this application.
// AI that has been considered in this application built:
//ChatGPT
//BlackBoxAI
//https://reactnative.dev/docs/colors - used for implementing some colours
//https://reactnative.dev/docs/button - to make use of a button
//