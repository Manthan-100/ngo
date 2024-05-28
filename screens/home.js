import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import tw from 'twrnc';
import { Home_Menu_Date } from '../services/utlits';
import { ScrollView } from 'react-native-gesture-handler';

const iconLibraries = {
    Ionicons,
    MaterialIcons,
    FontAwesome5
};

const Home = () => {


    return (
        <ScrollView style={{ backgroundColor: "#0000ffa1", height: "100%", width: '100%' }}>
            {Object.keys(Home_Menu_Date).map((category, index) => (
                <View key={index} style={{ width: '100%', marginBottom: 20 }}>
                    <Text style={[tw`mt-1 text-center font-semibold text-xl text-slate-100`, { color: '#fff' }]}>
                        {category}
                    </Text>
                    <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                        {Home_Menu_Date[category].map((item, idx) => {
                            const IconComponent = iconLibraries[item.iconLibrary];
                            return (
                                <View
                                    key={`${index}-${idx}`}
                                    style={[
                                        {
                                            backgroundColor: 'rgb(255, 255, 255)',
                                            marginHorizontal: 10,
                                            marginVertical: 10,
                                            width: '28%',
                                        },
                                        tw`rounded-lg flex justify-center items-center border-yellow-600 border-2`,
                                    ]}>
                                    <View
                                        style={[
                                            tw`rounded-b-lg`,
                                            {
                                                paddingHorizontal: 8,
                                                paddingVertical: 10
                                            },
                                        ]}>
                                        {IconComponent && <IconComponent name={item.iconName} style={[tw`text-center`]} size={50} color={item.theme} />}
                                        <Text style={[tw`text-center font-semibold `, { fontSize: 17, color: `${item.theme}`, fontWeight: '700' }]}>{item.label}</Text>
                                    </View>
                                </View>
                            );
                        })}
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}

export default Home;
