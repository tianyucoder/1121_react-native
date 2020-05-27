import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

const styles = {
  container: {
		height:280
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width,
    flex: 1
  }
}

export default class extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Swiper
          style={styles.wrapper} //样式
					height={240} //轮播图的高度
					showsButtons={true}//左右按钮
          onMomentumScrollEnd={(e, state, context) =>
            console.log('index:', state.index)
          }
          dot={ //小圆点的样式
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,.2)',
                width: 5,
                height: 5,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
          activeDot={ //小圆点激活时候的样式
            <View
              style={{
                backgroundColor: 'white',
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
          paginationStyle={{ //小圆点容器样式
            bottom: 10,
						//backgroundColor:'red'
          }}
          loop={true}
        >
          <View style={styles.slide}>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('../../assets/imgs/1.jpg')}
            />
          </View>
          <View style={styles.slide}>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('../../assets/imgs/2.jpg')}
            />
          </View>
          <View style={styles.slide}>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('../../assets/imgs/3.jpg')}
            />
          </View>
          <View style={styles.slide}>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('../../assets/imgs/4.jpg')}
            />
          </View>
        </Swiper>
      </View>
    )
  }
}