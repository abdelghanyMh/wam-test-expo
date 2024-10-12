import {
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import FeaturedCards from "@/components/FeaturedCards";
import { Link } from "expo-router";

export default function TabTwoScreen() {
  const categories = [
    {
      id: 1,
      title: "Restaurants",
      image: require("../../assets/restaurant.png"),
      link: "/Restaurant",
    },
    {
      id: 2,
      title: "Club / Bar",
      image: require("../../assets/club.png"),
      link: "/Club",
    },
    {
      id: 3,
      title: "Activités",
      image: require("../../assets/activities.png"),
      link: "/Activites",
    },
    {
      id: 4,
      title: "Visites culturelles",
      image: require("../../assets/cultural.png"),
      link: "/Visit",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Recherchez"
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.nearMeButton}>
          <Feather name="map-pin" size={18} color="#007AFF" />
          <Text style={styles.nearMeText}>Near me</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.categoriesContainer}>
        {categories.map((category) => (
          <Link href={category.link} asChild key={category.id}>
            <TouchableOpacity key={category.id} style={styles.categoryCard}>
              <Image source={category.image} style={styles.categoryImage} />
              <View style={styles.categoryOverlay} />
              <Text style={styles.categoryTitle}>{category.title}</Text>
            </TouchableOpacity>
          </Link>
        ))}
      </View>
      <View style={styles.FeaturedCardsContainer}>
        <FeaturedCards />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: "#F0F0F0",
    borderRadius: 20,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  nearMeButton: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
    padding: 8,
  },
  nearMeText: {
    color: "#007AFF",
    marginLeft: 4,
    fontSize: 14,
    fontWeight: "500",
  },
  categoriesContainer: {
    padding: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  categoryCard: {
    width: "48%",
    height: 150,
    marginBottom: 16,
    borderRadius: 12,
    overflow: "hidden",
  },
  categoryImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  categoryOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  categoryTitle: {
    position: "absolute",
    bottom: 12,
    left: 12,
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  FeaturedCardsContainer: {
    backgroundColor: "#000",
  },
});
