import React from 'react'
import { Image, TextInput, Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'


const RentalCars = () => (
<ScrollView style={styles.rental_cars} showsVerticalScrollIndicator={false}>
<Image
    style={styles.background_image}
    source={{uri: item.background_image}}
    />
<Text style={styles.main_title}>{item.main_title}</Text>
<TextInput style={styles.enter_city_airport_or_address} placeholder={'Enter City Airport Or Address'} />
<Text style={styles.insurance_text}>{item.insurance_text}</Text>
<Image
    style={styles.liberty_icon}
    source={{uri: item.liberty_icon}}
   />
<Text style={styles.liberty_mutual}>{item.liberty_mutual}</Text>
<Text style={styles.insurance}>{item.insurance}</Text>
<Image
    style={styles.car_clip}
    source={{uri: item.car_clip}}
    />
<Text style={styles.endless_option}>{item.endless_option}</Text>
<Text style={styles.about_models}>{item.about_models}</Text>
</ScrollView>
)

export default RentalCars;

const styles = StyleSheet.create({
    'background_image': {
        'width': '100vw',
        'height': '100vw',
        'marginTop': 5
    },
    'main_title': {
        'fontSize': 25,
        'fontWeight': '800',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'alignSelf': 'center',
        'textAlign': 'center'
    },
    'enter_city_airport_or_address': {
        'fontSize': 15,
        'fontWeight': '400',
        'padding': 10,
        'margin': 5,
        'backgroundColor': 'whitesmoke',
        'borderWidth': 1
    },
    'insurance_text': {
        'color': 'hsl(274,100%,60%)',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'liberty_icon': {
        'width': '10vw',
        'height': '10vw',
        'margin': 5
    },
    'liberty_mutual': {
        'color': 'hsl(274,100%,60%)',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'insurance': {
        'color': 'hsl(274,100%,60%)',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'car_clip': {
        'width': '100vw',
        'height': '100vw',
        'marginTop': 5
    },
    'endless_option': {
        'color': 'hsl(274,100%,60%)',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'about_models': {
        'fontSize': 12,
        'fontWeight': '250',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});