
import React, {useEffect, useState} from 'react';
import { Icon } from 'react-native-elements'
import {
  StyleSheet,
  View,
  Dimensions,
  Animated,
  TouchableOpacity,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {environment} from  '../../../environment/environment'
import { ExpandingDot } from 'react-native-animated-pagination-dots';
import { set } from 'react-native-reanimated';
import style from '../login/style';
const tuto1 = require('../../../assets/tuto1/tuto1.png')
const tuto2 = require('../../../assets/tuto2/tuto2.png')
const tuto3 = require('../../../assets/tuto3/tuto3.png')
const tuto4 = require('../../../assets/tuto4/tuto4.png')
const { width } = Dimensions.get('screen');

const data = [
  {
    image:tuto1,
    backgroundColor: environment.colors.splash_background,
    text:'Poupe tempo evitando filas em orgáos públicos!',
    word:'Rápido'
  },
  {
    image:tuto2,
    backgroundColor: environment.colors.splash_background,
    text:'1. Entre por reconhecimento facial!',
    word:'Seguro'
  },
  {
    image:tuto3,
    backgroundColor: environment.colors.splash_background,
    text:'2. Solicite serviços públicos sem sair de casa!',
    word:'Cômodo'
  },
  {
    image:
      tuto4,
    backgroundColor: environment.colors.splash_background,
    text:'3. Envie os documentos necessários e aguarde!',
    word:'Fácil'
  }

];

const imageW = width * 0.8;
const imageH = imageW * 1.2;

const ButtonNavigation = ({navigation}) => {
  const [final,setFinal] = useState(false);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const keyExtractor = React.useCallback((_, index) => index.toString(), []);
  //Current item index of flatlist
  const [activeIndex, setActiveIndex] = useState(0);
  let flatListRef = React.useRef(null);
  const gotoNextPage = () => {
    if (activeIndex + 1 < data.length) {
      // @ts-ignore
      flatListRef.current.scrollToIndex({
        index: activeIndex + 1,
        animated: true,
      });
    }else{
      {navigation.navigate('TermoDeUso')}
    }
  };
  const gotoPrevPage = () => {
   if(activeIndex !== 0){
      // @ts-ignore
      flatListRef.current.scrollToIndex({
        index: activeIndex - 1,
        animated: true})
      }
      
  };
  const skipToStart = () => {
    // @ts-ignore
    flatListRef.current.scrollToIndex({
      index: data.length - 1,
      animated: true,
    });
  };
  //Flatlist props that calculates current item index
  const onViewRef = React.useRef(({ viewableItems }) => {
    setActiveIndex(viewableItems[0].index);
    setFinal(true)
    if(viewableItems[0].index === 4){
      setFinal(true)
    }else{
      setFinal(false)
    }
  });
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });
  const renderItem = React.useCallback(({ item }) => {
    return (
       <View style={[styles.itemContainer]}>
         <Text style={{color: '#039384', marginBottom:23, fontSize: 18}}>{item.word}</Text>
        {item.image ? <Animated.Image
          style={{
            width: imageW,
            height: imageH,
            borderRadius: 20,
            resizeMode: 'cover',
          }}
          source={item.image}
        />:null}
        {item.text ? <Text style={styles.textField}>
          {item.text}
        </Text>:null}
        {final ? <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.textFieldFinal}>Para acessar os seus dados,{'\n'}você deve enviar uma foto do seu rosto.</Text>
          <TouchableOpacity style={styles.buttonFinal} onPress={() => {navigation.navigate('BioPass')}}>
            <Text style={{color:'white',fontSize:14}}>COMEÇAR</Text>
          </TouchableOpacity>
          <Text style={styles.textField}>Ao clicar em COMEÇAR, você concorda com os{'\n'} Termos de Uso deste aplicativo.</Text>
          </View> : null}
      </View>
    );
  }, []);

  return (
    <View style={[styles.container]}>
      <StatusBar hidden />
      <View style={[StyleSheet.absoluteFillObject]}>
        {data.map((item, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const colorFade = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });
          return (
            <Animated.View
              key={index}
              style={[
                StyleSheet.absoluteFillObject,
                { backgroundColor: item.backgroundColor, opacity: colorFade },
              ]}
            />
          );
        })}
      </View>
      <Animated.FlatList
        ref={flatListRef}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        decelerationRate={'normal'}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
      />
      <ExpandingDot
    data={data}
    expandingDotWidth={30}
    scrollX={scrollX}
    inActiveDotOpacity={0.6}
    dotStyle={{
        width: 10,
        height: 10,
        backgroundColor: '#347af0',
        borderRadius: 5,
        marginHorizontal: 5
    }}
    containerStyle={{
        top: 30,
    }}
/>
      <View style={[styles.buttonContainer]}>
        {!(activeIndex === 0) ? <TouchableOpacity
          style={[styles.buttonLink]}
          onPress={() => gotoPrevPage()}
        >
          <Icon name="chevron-left" color={environment.colors.btn_raised} type='Entypo'></Icon>
        </TouchableOpacity>
       : null}
          <TouchableOpacity style={{position: 'absolute', backgroundColor:'white',bottom:80,right:-10}} onPress={() => skipToStart()}>
            <Text style={{textDecorationLine:'underline',color:'#0BCEBB'}} >Pular</Text>
          </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonRaised]}
          onPress={() => gotoNextPage()}
        >
          <Icon name="chevron-right" type='Entypo' color='white'></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection:'row',
    position:'relative',
    marginBottom: -50
  },
  buttonRaised: {
    backgroundColor: environment.colors.btn_raised,
    padding: 22,
    margin: 20,
    fontWeight: '700',
    color: 'white',
    borderRadius: 6,
    left:50,
    position: 'absolute',
    bottom:80
  },
  buttonLink: {
    padding:18,
    margin: 20,
    borderWidth: 3,
    borderColor:  environment.colors.btn_raised,
    fontWeight: '700',
    color: environment.colors.btn_raised,
    borderRadius: 6,
    position: 'absolute',
    right:50,
    bottom:80
  },
  buttonText: {
    margin:15,
    color: 'white',
  },
  textField:{
    margin: 15,
    fontFamily:'OpenSans',
    fontSize: 12,
    color: 'black'
  },
  textFieldFinal:{
    fontFamily: 'OpenSans',
    fontWeight: '700',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 15,
  },
  buttonFinal: {
    backgroundColor: environment.colors.btn_raised,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 4,
    elevation: 3,
  }
});

export default ButtonNavigation;