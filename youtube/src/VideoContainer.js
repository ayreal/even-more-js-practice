import React, { Component } from "react";
import VideoSearch from "./VideoSearch";
import VideoList from "./VideoList";
import VideoFeature from "./VideoFeature";

// const videos = [{
//   kind: "youtube#searchResult",
//   etag: ""ld9biNPKjAjgjV7EZ4EKeEGrhao/FQZuUazV-nC71icR5AV8IaQDtR4"",
//   id: {
//     kind: "youtube#video",
//     videoId: "RBvHrG87Jiw"
//   },
//   snippet: {
//     publishedAt: "2015-08-22T01:57:36.000Z",
//     channelId: "UCPG6vcnQ00Fmotg5A-VXwGA",
//     title: "Cow Videos for Children, More Cows for Kids",
//     description: "https://www.youtube.com/c/greatvideosforkids Cow Videos for Children, More Cows for Kids. The original collection of dairy cows on the farm is back.",
//     thumbnails: {
//       default: {
//         url: "https://i.ytimg.com/vi/RBvHrG87Jiw/default.jpg",
//         width: 120,
//         height: 90
//       },
//       medium: {
//         url: "https://i.ytimg.com/vi/RBvHrG87Jiw/mqdefault.jpg",
//         width: 320,
//         height: 180
//       },
//       high: {
//         url: "https://i.ytimg.com/vi/RBvHrG87Jiw/hqdefault.jpg",
//         width: 480,
//         height: 360
//       }
//     },
//     channelTitle: "GreatVideosforKids",
//     liveBroadcastContent: "none"
//   }
// },
// {
//   kind: "youtube#searchResult",
//   etag: ""ld9biNPKjAjgjV7EZ4EKeEGrhao/fd6lad0nPJmfzmS-oGMtWnemUXc"",
//   id: {
//     kind: "youtube#video",
//     videoId: "hLarNcEZupg"
//   },
//   snippet: {
//     publishedAt: "2016-10-17T22:30:01.000Z",
//     channelId: "UCu9MYfF0vosVcK38oNnnJxw",
//     title: "five little cows | nursery rhymes | 3d rhymes | kids songs | farm song by Farmees S01E117",
//     description: "five little cows | nursery rhymes | 3d rhymes | kids songs | farm song by Farmees S01E117 of Preschool Playlist for Children Season 1 In the land of Farmees we ...",
//     thumbnails: {
//       default: {
//         url: "https://i.ytimg.com/vi/hLarNcEZupg/default.jpg",
//         width: 120,
//         height: 90
//       },
//       medium: {
//         url: "https://i.ytimg.com/vi/hLarNcEZupg/mqdefault.jpg",
//         width: 320,
//         height: 180
//       },
//       high: {
//         url: "https://i.ytimg.com/vi/hLarNcEZupg/hqdefault.jpg",
//         width: 480,
//         height: 360
//       }
//     },
//     channelTitle: "Farmees - Nursery Rhymes And Kids Songs",
//     liveBroadcastContent: "none"
//   }
// },
// {
//   kind: "youtube#searchResult",
//   etag: ""ld9biNPKjAjgjV7EZ4EKeEGrhao/N6R__NC-RPNgu8MRBqujMjOkkpI"",
//   id: {
//     kind: "youtube#video",
//     videoId: "FavUpD_IjVY"
//   },
//   snippet: {
//     publishedAt: "2010-07-16T14:58:25.000Z",
//     channelId: "UC9Ntx-EF3LzKY1nQ5rTUP2g",
//     title: "cows & cows & cows",
//     description: "surreal bovine choreography. No cows were harmed during the making of this video, though their future prospects probably aren't as optimistic. music is ...",
//     thumbnails: {
//       default: {
//         url: "https://i.ytimg.com/vi/FavUpD_IjVY/default.jpg",
//         width: 120,
//         height: 90
//       },
//       medium: {
//         url: "https://i.ytimg.com/vi/FavUpD_IjVY/mqdefault.jpg",
//         width: 320,
//         height: 180
//       },
//       high: {
//         url: "https://i.ytimg.com/vi/FavUpD_IjVY/hqdefault.jpg",
//         width: 480,
//         height: 360
//       }
//     },
//     channelTitle: "cyriak",
//     liveBroadcastContent: "none"
//   }
// },
// {
//   kind: "youtube#searchResult",
//   etag: ""ld9biNPKjAjgjV7EZ4EKeEGrhao/abzu541YsMBaNYQ4nDFzUyimCbA"",
//   id: {
//     kind: "youtube#video",
//     videoId: "-02MT_P0Gx8"
//   },
//   snippet: {
//     publishedAt: "2015-06-26T21:23:29.000Z",
//     channelId: "UChl6CG-V7LgqhfwkvbHH67Q",
//     title: "Cows Are Awesome: Compilation",
//     description: "SUBSCRIBE TO AFV ANIMALS!: http://bit.ly/16JmSEQ Watch More Animal Videos at: http://www.youtube.com/petsami Like us on FACEBOOK: ...",
//     thumbnails: {
//       default: {
//         url: "https://i.ytimg.com/vi/-02MT_P0Gx8/default.jpg",
//         width: 120,
//         height: 90
//       },
//       medium: {
//         url: "https://i.ytimg.com/vi/-02MT_P0Gx8/mqdefault.jpg",
//         width: 320,
//         height: 180
//       },
//       high: {
//         url: "https://i.ytimg.com/vi/-02MT_P0Gx8/hqdefault.jpg",
//         width: 480,
//         height: 360
//       }
//     },
//     channelTitle: "Waggle TV",
//     liveBroadcastContent: "none"
//   }
// }
// ]

class VideoContainer extends Component {
  render() {
    return (
      <div>
        VideoContainer
        <VideoSearch />
        <VideoFeature />
        <VideoList />
      </div>
    );
  }
}
export default VideoContainer;
