// import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// // import Video from 'react-native-video'
// import {Card} from '@ui-kitten/components'
// import VideoPlayer from 'react-native-video-player'

// const HighlightTab = () => {
// const DATA =[
//     {
//         id:1,
//         name:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
//         name_1: "By Blender Foundation",
//         time: '4',
        
      
//     },
//     {
//         id:2,
//         name: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
//         name_1: "By Blender Foundation",
//         time: '4',
//     },
//     {
//         id:3,
//         name:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
//         name_1: "By Google",
//         time: '4',
//     },
//     {
//         id:4,
//         name:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
//         name_1: "By Google",
//         time: '4',
//     },
//     {
//         id:5,
//         name:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
//         name_1: "By Google",
//         time: '4',
//     },
//     {
//         id:7,
//         name:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
//         name_1: "By Google",
//         time: '4',
//     },
// ]

//   return (
// <>
// <Text>Hello</Text>
// <ScrollView scrollEventThrottle={16}>

// </ScrollView>
//      <ScrollView scrollEventThrottle={16} >
//        <FlatList data={DATA} keyExtractor={(item,index)=>`${index}`} 
//        renderItem = {({item,index}) => (
      
//         <ScrollView style={{marginTop:10}}>
//             <Card header={()=>(
//                 <Viev style={{alignItems:'center'}}>
//                     <Text style={styles.title}>{item.name_1}</Text>
//                 </Viev>
//             )}
//             footer={()=>(
//                 <Viev>
//                     <Text>Time Duration:{item.time}min</Text>
//                 </Viev>

//             )}
//             >
//                 <Video video={{uri:item.name}} autoplay={false} defaultMuted={true}  />
//             </Card>
//         </ScrollView>
//   )}
       
// />
    
//      </ScrollView>
   
//     </>
   
//   )
//     }


// export default HighlightTab;

// const styles = StyleSheet.create({
//     title:{
//         fontSize:18,

//     }
// })