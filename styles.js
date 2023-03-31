"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
exports.default = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        bottom: 50,
        left: 100,
    },
    searchInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 25,
        marginRight: 10,
        paddingLeft: 10,
        backgroundColor: '#fff',
    },
    searchButton: {
        marginLeft: 10,
    },
    cardContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 5,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardDivider: {
        marginBottom: 10,
    },
    cardItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    cardItemIcon: {
        marginRight: 10,
    },
    cardItemText: {
        marginLeft: 10,
    },
});
