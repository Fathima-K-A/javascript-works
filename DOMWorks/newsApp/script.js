const APIKEY="6ec8bb20cb0e4f18b293db8cdd0cd642"

let url=`https://newsapi.org/v2/top-headlines?country=in&apikey=${APIKEY}`

getData()

async function getData(){

    let res=await fetch(url)
    let data=await res.json()
    displayNews(data)
}




// const news={
//     "status": "ok",
//     "totalResults": 38,
//     "articles": [
//       {
//         "source": {
//           "id": null,
//           "name": "Hindustan Times"
//         },
//         "author": "HT Education Desk",
//         "title": "NEET PG 2024 Live: Revised exam date to be announced soon, Dharmendra Pradhan - Hindustan Times",
//         "description": "NEET PG 2024 Live: Union Education Minister Dharmendra Pradhan says NEET PG 2024 exam dates will be announced soon. Follow the liveblog for the latest updates",
//         "url": "https://www.hindustantimes.com/education/competitive-exams/neet-pg-2024-live-update-nta-exam-date-time-latest-news-101719657204767.html",
//         "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/06/29/550x309/Students-coming-out-of-examination-centre-after-ap_1716745228983_1719657532346.jpg",
//         "publishedAt": "2024-06-29T14:16:30Z",
//         "content": "NEET PG 2024 Live: Speaking to the media, Union Education Minister Dharmendra Pradhan said the NEET PG revised exam dates would be announced by Monday or Tuesday. Earlier, the Ministry of Health and … [+4951 chars]"
//       },
//       {
//         "source": {
//           "id": null,
//           "name": "Hindustan Times"
//         },
//         "author": "Rohit Mundayur",
//         "title": "India vs South Africa Live Score T20 World Cup Final: Seconds away from the toss - Hindustan Times",
//         "description": "India vs South Africa Live Score, T20 World Cup 2024 Final, IND vs SA: India have lost three wickets inside the first five overs.",
//         "url": "https://www.hindustantimes.com/cricket/india-vs-south-africa-live-score-t20-world-cup-2024-final-today-ind-vs-sa-match-updates-and-full-scorecard-29-june-101719648383470.html",
//         "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/06/29/550x309/CRICKET-T20-IND-ZAF-REPORT-20_1719672314434_1719672331921.JPG",
//         "publishedAt": "2024-06-29T13:58:05Z",
//         "content": "India vs South Africa Live Score, T20 World Cup 2024 Final, IND vs SA: Virat Kohli hit three fours in the first over but Keshav Maharaj hit back for South Africa by dismissing Rohit Sharma and Rishab… [+35163 chars]"
//       },
//       {
//         "source": {
//           "id": "the-times-of-india",
//           "name": "The Times of India"
//         },
//         "author": "TOI Entertainment Desk",
//         "title": "'Kalki 2898 AD' box office collection day 3 early reports: The Prabhas and Deepika Padukone starrer is expected to surpass Rs 100 crore globally for third day in a row | - TOI Etimes",
//         "description": "'Kalki 2898 AD,' starring Prabhas, has shown robust performance at the global box office, potentially achieving three consecutive days over Rs 100 cro",
//         "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/kalki-2898-ad-box-office-collection-day-3-early-reports-the-prabhas-and-deepika-padukone-starrer-is-expected-to-surpass-rs-100-crore-globally-for-third-day-in-a-row/articleshow/111366636.cms",
//         "urlToImage": "https://static.toiimg.com/thumb/msid-111366636,width-1070,height-580,imgsize-49066,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
//         "publishedAt": "2024-06-29T13:51:00Z",
//         "content": null
//       },
//       {
//         "source": {
//           "id": null,
//           "name": "Hindustan Times"
//         },
//         "author": "HT Sports Desk",
//         "title": "Aiden Markram stunned by question on Virat Kohli, SA captain regains composure to give brilliant reply on India legend - Hindustan Times",
//         "description": "India vs. South Africa, T20 World Cup 2024 final: South Africa captain Aiden Markram brilliantly replied to a question on India legend Virat Kohli's form. | Crickit",
//         "url": "https://www.hindustantimes.com/cricket/aiden-markram-stunned-by-question-on-virat-kohli-in-india-vs-south-africa-t20-world-cup-final-gives-brilliant-reply-101719667647978.html",
//         "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/06/29/1600x900/Screenshot_2024-06-29_190031_1719667975983_1719668003076.png",
//         "publishedAt": "2024-06-29T13:39:14Z",
//         "content": "Opposition captains getting asked about Virat Kohli and the plans to stop him is nothing new in cricket, but what took South Africa captain Aiden Markram by surprise was the nature of the question ab… [+2171 chars]"
//       },
//       {
//         "source": {
//           "id": null,
//           "name": "Hindustan Times"
//         },
//         "author": "HT News Desk",
//         "title": "Sharad Pawar on Uddhav Thackeray as CM face of Oppn in Maharashtra: ‘One person can’t…' - Hindustan Times",
//         "description": "Sharad Pawar also criticised Lok Sabha speaker Om Birla's reference to the Emergency, saying it was not appropriate and did not suit the speaker's position. | Latest News India",
//         "url": "https://www.hindustantimes.com/india-news/sharad-pawar-on-udhhav-as-cm-face-of-oppn-in-maharashtra-one-person-cant-101719662492992.html",
//         "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/06/29/1600x900/PTI06-15-2024-000199A-0_1719662491291_1719662528227.jpg",
//         "publishedAt": "2024-06-29T13:25:01Z",
//         "content": "NCP (SP) president Sharad Pawar on Saturday dismissed projecting a single leader as the chief ministerial candidate even as Shiv Sena (UBT) MP Sanjay Raut demanded to project Uddhav Thackeray as the … [+2256 chars]"
//       },
//       {
//         "source": {
//           "id": null,
//           "name": "Racingnews365.com"
//         },
//         "author": null,
//         "title": "LIVE: 2024 F1 Austrian Grand Prix - Qualifying - Racingnews365.com",
//         "description": "Follow all the live action from qualifying for the 2024 F1 Austrian Grand Prix!",
//         "url": "https://racingnews365.com/live-2024-f1-austrian-grand-prix-qualifying",
//         "urlToImage": "https://cdn.racingnews365.com/2024/Verstappen/_1800x945_crop_center-center_75_none/Verstappen-Austria_2024-06-29-152031_lqny.jpg?v=1719674464",
//         "publishedAt": "2024-06-29T13:03:20Z",
//         "content": "Max Verstappen and the McLaren pair of Lando Norris and Oscar Piastri have enjoyed a strong start to the weekend at the Red Bull Ring.\r\nThe trio locked out the top three points in both sprint qualify… [+637 chars]"
//       },
//       {
//         "source": {
//           "id": null,
//           "name": "DNA India"
//         },
//         "author": "Sonali Sharma",
//         "title": "10 stunning images of galaxies captured by NASA - DNA India",
//         "description": "images of galaxies captured by NASA",
//         "url": "https://www.dnaindia.com/web-stories/viral/10-stunning-images-of-galaxies-captured-by-nasa-1719664637173",
//         "urlToImage": null,
//         "publishedAt": "2024-06-29T12:45:12Z",
//         "content": "This landscape of 'mountains' and 'valleys' speckled with glittering stars is actually the edge of a nearby, young, star-forming region called NGC 3324 in the Carina Nebula"
//       },
//       {
//         "source": {
//           "id": null,
//           "name": "Livemint"
//         },
//         "author": "Sanchari Ghosh",
//         "title": "Sunita Williams stuck in space: ISRO scientist on how Starliner can make safe return, ‘Human lives are involved so…’ | Mint - Mint",
//         "description": "NASA delays Boeing Starliner's return to Earth from ISS with first crew of astronauts, Barry Eugene 'Butch' Wilmore and Sunita Williams, due to technical issues. No new date set, raising questions about the return timing of the astronauts on Boeing's first cr…",
//         "url": "https://www.livemint.com/science/news/sunita-williams-stuck-in-space-human-lives-are-involved-so-isro-scientist-on-how-starliner-can-make-safe-return-11719662738360.html",
//         "urlToImage": "https://www.livemint.com/lm-img/img/2024/06/29/1600x900/PTI05-06-2024-000075B-0_1719279909338_1719664134245.jpg",
//         "publishedAt": "2024-06-29T12:31:35Z",
//         "content": "NASA has further postponed the Boeing Starliner's return to Earth from the International Space Station with its first crew of astronauts - Barry Eugene \"Butch\" Wilmore and Sunita Williams, to allow m… [+2297 chars]"
//       },
//       {
//         "source": {
//           "id": "the-hindu",
//           "name": "The Hindu"
//         },
//         "author": "The Hindu",
//         "title": "Arvind Kejriwal sent to judicial custody till July 12 in Delhi Excise policy case - The Hindu",
//         "description": null,
//         "url": "https://www.thehindu.com/news/national/arvind-kejriwal-sent-to-judicial-custody-till-july-12-in-delhi-excise-policy-case/article68347980.ece",
//         "urlToImage": null,
//         "publishedAt": "2024-06-29T11:44:00Z",
//         "content": null
//       },
//       {
//         "source": {
//           "id": "the-times-of-india",
//           "name": "The Times of India"
//         },
//         "author": "TOI World Desk",
//         "title": "Man killed after attacking policeman with crossbow in Serbia - The Times of India",
//         "description": "Europe News: A Serbian police officer was injured by an unidentified attacker who shot a bolt with a crossbow at him while he was on duty at the Israeli Embassy in.",
//         "url": "https://timesofindia.indiatimes.com/world/europe/attacker-attacks-policeman-with-crossbow-in-serbia/articleshow/111364212.cms",
//         "urlToImage": "https://static.toiimg.com/thumb/msid-111364218,width-1070,height-580,imgsize-18652,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
//         "publishedAt": "2024-06-29T11:40:00Z",
//         "content": null
//       },
//       {
//         "source": {
//           "id": "the-times-of-india",
//           "name": "The Times of India"
//         },
//         "author": "ET Online",
//         "title": "Government panel recommends Challa Sreenivasulu Setty as next SBI Chairman - The Economic Times",
//         "description": "Financial Services Institutions Bureau interfaced with 3 candidates on June 29, 2024 for the position of Chairman in State Bank of India,  the panel said in a release.  ​The Bureau added that taking performance and experience into consideration, Setty was the…",
//         "url": "https://economictimes.indiatimes.com/industry/banking/finance/banking/govt-panel-recommends-challa-sreenivasulu-setty-as-next-sbi-chairman/articleshow/111363846.cms",
//         "urlToImage": "https://img.etimg.com/thumb/msid-111363832,width-1200,height-630,imgsize-67796,overlay-economictimes/photo.jpg",
//         "publishedAt": "2024-06-29T11:21:22Z",
//         "content": null
//       },
//       {
//         "source": {
//           "id": "google-news",
//           "name": "Google News"
//         },
//         "author": "Hindustan Times",
//         "title": "International Asteroid Day 2024: Date, history, significance - Hindustan Times",
//         "description": null,
//         "url": "https://news.google.com/rss/articles/CBMigQFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vbGlmZXN0eWxlL2Zlc3RpdmFscy9pbnRlcm5hdGlvbmFsLWFzdGVyb2lkLWRheS0yMDI0LWRhdGUtaGlzdG9yeS1zaWduaWZpY2FuY2UtMTAxNzE5NjUzMjQxODkwLmh0bWzSAYUBaHR0cHM6Ly93d3cuaGluZHVzdGFudGltZXMuY29tL2xpZmVzdHlsZS9mZXN0aXZhbHMvaW50ZXJuYXRpb25hbC1hc3Rlcm9pZC1kYXktMjAyNC1kYXRlLWhpc3Rvcnktc2lnbmlmaWNhbmNlLTEwMTcxOTY1MzI0MTg5MC1hbXAuaHRtbA?oc=5",
//         "urlToImage": null,
//         "publishedAt": "2024-06-29T10:56:29Z",
//         "content": null
//       },
//       {
//         "source": {
//           "id": null,
//           "name": "Business Standard"
//         },
//         "author": "Press Trust of India",
//         "title": "Govt approves 40% hardship & risk allowance for NDRF rescuers: Amit Shah - Business Standard",
//         "description": "Amit Shah said this while welcoming a 35-member expedition team of the National Disaster Response Force (NDRF) that recently scaled the 21,625-foot-high Mt Manirang in Himachal Pradesh",
//         "url": "https://www.business-standard.com/india-news/govt-approves-40-hardship-risk-allowance-for-ndrf-rescuers-amit-shah-124062900392_1.html",
//         "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2024-06/26/thumb/fitandfill/400X400/1719398760-8521.jpg",
//         "publishedAt": "2024-06-29T10:52:59Z",
//         "content": "Amit Shah said this while welcoming a 35-member expedition team of the National Disaster Response Force (NDRF) that recently scaled the 21,625-foot-high Mt Manirang in Himachal Pradesh\r\nUnion Home Mi… [+3335 chars]"
//       },
//       {
//         "source": {
//           "id": "the-times-of-india",
//           "name": "The Times of India"
//         },
//         "author": "TOI Sports Desk",
//         "title": "Rohit Sharma on verge of historic T20 World Cup record in final against South Africa - The Times of India",
//         "description": "Cricket News: India captain Rohit Sharma is nearing a historic achievement as his team faces South Africa in the T20 World Cup final. Sharma is just six runs away f",
//         "url": "https://timesofindia.indiatimes.com/sports/cricket/icc-mens-t20-world-cup/rohit-sharma-on-verge-of-historic-t20-world-cup-record-in-final-against-south-africa/articleshow/111362719.cms",
//         "urlToImage": "https://static.toiimg.com/thumb/msid-111363026,width-1070,height-580,imgsize-52904,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
//         "publishedAt": "2024-06-29T10:43:00Z",
//         "content": null
//       },
//       {
//         "source": {
//           "id": null,
//           "name": "NDTV News"
//         },
//         "author": null,
//         "title": "Canopy Outside Rajkot Airport Terminal Collapses Amid Heavy Rain - NDTV",
//         "description": "The soft roof of the canopy outside Rajkot airport's passenger pickup and drop area collapsed after heavy rain today.",
//         "url": "https://www.ndtv.com/india-news/canopy-outside-rajkot-airport-terminal-collapses-amid-heavy-rain-5995461",
//         "urlToImage": "https://c.ndtvimg.com/2024-06/ebdccrvg_rajkot-canopy_625x300_29_June_24.jpeg?im=FaceCrop,algorithm=dnn,width=1200,height=738?ver-20240615.100",
//         "publishedAt": "2024-06-29T10:10:00Z",
//         "content": "The soft roof of the canopy outside Rajkot airport terminal\r\nNew Delhi: The soft roof of the canopy outside Rajkot airport's passenger pickup and drop area collapsed after heavy rain today.\r\nThe airp… [+120 chars]"
//       },
//       {
//         "source": {
//           "id": "the-times-of-india",
//           "name": "The Times of India"
//         },
//         "author": "Steffy Thevar",
//         "title": "Man tests Zika positive in Pune, fourth case within a week - The Times of India",
//         "description": "The 22-year-old son of a Zika-positive woman tested positive for Zika but is asymptomatic. The infection is self-limiting. PMC conducted fogging and l",
//         "url": "https://timesofindia.indiatimes.com/city/pune/man-tests-zika-positive-in-pune-fourth-case-within-a-week/articleshow/111362046.cms",
//         "urlToImage": "https://static.toiimg.com/thumb/msid-47529300,width-1070,height-580,imgsize-110164,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
//         "publishedAt": "2024-06-29T09:50:00Z",
//         "content": null
//       },
//       {
//         "source": {
//           "id": "google-news",
//           "name": "Google News"
//         },
//         "author": "Bar & Bench - Indian Legal News",
//         "title": "Delhi rains sink lawyer chambers in NCR - Bar & Bench - Indian Legal News",
//         "description": null,
//         "url": "https://news.google.com/rss/articles/CBMiS2h0dHBzOi8vd3d3LmJhcmFuZGJlbmNoLmNvbS9jb2x1bW5zL2RlbGhpLXJhaW5zLXNpbmstbGF3eWVyLWNoYW1iZXJzLWluLW5jctIBVWh0dHBzOi8vd3d3LmJhcmFuZGJlbmNoLmNvbS9hbXAvc3RvcnkvY29sdW1ucy9kZWxoaS1yYWlucy1zaW5rLWxhd3llci1jaGFtYmVycy1pbi1uY3I?oc=5",
//         "urlToImage": null,
//         "publishedAt": "2024-06-29T09:34:09Z",
//         "content": null
//       },
//       {
//         "source": {
//           "id": null,
//           "name": "CNBCTV18"
//         },
//         "author": "Meghna Sen",
//         "title": "Emcure Pharma IPO: GMP rises sharply ahead of issue opening for subscription on July 3 - CNBCTV18",
//         "description": "Emcure Pharmaceuticals is looking to raise a total of ₹1,951.04 crore through the issue, considering the upper end of the price band.",
//         "url": "https://www.cnbctv18.com/market/emcure-pharma-ipo-gmp-rises-sharply-ahead-of-issue-opening-for-subscription-on-july-3-namita-thapar-19435764.htm",
//         "urlToImage": "https://images.cnbctv18.com/uploads/2023/08/Pharma.jpg?im=FitAndFill,width=500,height=300",
//         "publishedAt": "2024-06-29T09:23:47Z",
//         "content": "Shares of Emcure Pharmaceuticals are trading at a premium of 270 in the unlisted market on Saturday (June 29), days ahead of the issue opening for subscription.The grey market is an unofficial ecosys… [+2685 chars]"
//       },
//       {
//         "source": {
//           "id": null,
//           "name": "Hindustan Times"
//         },
//         "author": "HT Entertainment Desk",
//         "title": "Sonakshi Sinha, Tiger Shroff, Alaya F yet to receive payment for Bade Miyan Chote Miyan from Vashu Bhagnani: Report - Hindustan Times",
//         "description": "Bade Miyan Chote Miyan also stars Akshay Kumar and Prithviraj Sukumaran. It hit the theatres on April 10. | Bollywood",
//         "url": "https://www.hindustantimes.com/entertainment/bollywood/sonakshi-sinha-tiger-shroff-alaya-f-yet-to-receive-payment-for-bade-miyan-chote-miyan-from-vashu-bhagnani-report-101719649851790.html",
//         "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/06/29/1600x900/Bade_Miyan_Chote_Miyan_1719651205682_1719651302410.jpg",
//         "publishedAt": "2024-06-29T09:08:29Z",
//         "content": "Several Bade Miyan Chote Miyan actors are yet to receive their payments for starring in the film backed by producer Vashu Bhagnani's production house Pooja Entertainment. As reported by Indian Expres… [+2260 chars]"
//       },
//       {
//         "source": {
//           "id": null,
//           "name": "YouTube"
//         },
//         "author": null,
//         "title": "OnePlus Phone | OnePlus Launches Its Latest Handset OnePlus Nord CE 4 Lite - NDTV",
//         "description": "OnePlus is back with its latest Nord series handset - the OnePlus Nord CE 4 Lite. This budget handset is equipped with a large 5,500mAh battery with 80W Supe...",
//         "url": "https://www.youtube.com/watch?v=FeEhEBSMMtg",
//         "urlToImage": "https://i.ytimg.com/vi/FeEhEBSMMtg/maxresdefault.jpg",
//         "publishedAt": "2024-06-29T08:34:48Z",
//         "content": null
//       }
//     ]
//   }


//  displayNews(news)

 const categories=["business","entertainment","general","health","science","sports","technology"]

  function displayNews(news){

    let htmldata=``

    for(let n of news.articles){
        htmldata+=`
        <div class="col">
    <div class="card">
      <img src="${n.urlToImage}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${n.title}</h5>
        <p class="card-text">${n.description}</p>
      </div>
    </div>
  </div>
`
    }

    document.querySelector("#root").innerHTML=htmldata
}


displayCategories(categories)
function displayCategories(categories){

    let htmldata=``
    for(let c of categories){
        htmldata+=`

         <button value="${c}" class="btn btn-outline-success" onclick="fetchNewsByCategory(event)">${c}</button>

        `
    }
    document.querySelector("#category").innerHTML=htmldata
  }


  function fetchNewsByCategory(event){

    let categoryName=event.target.value
    fetch(`${url}&category=${categoryName}`).then(res=>res.json()).then(data=>displayNews(data))
  }