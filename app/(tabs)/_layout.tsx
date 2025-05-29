import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";

const Tab = createBottomTabNavigator();

function App() {
    return (
        <Tab.Navigator>
            <Tab.Screen name=
                "Home" component={Home} />
            <Tab.Screen name=
                "books" component={Home} />
        </Tab.Navigator>

    )
}

export default App;