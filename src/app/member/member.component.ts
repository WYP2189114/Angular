import { Component } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {

  members = [
    { Name: '花芽なずな', Birth: '4/2', YoutubeLink: 'https://www.youtube.com/@nazunakaga', Picture: 'https://yt3.googleusercontent.com/HsgFKOFi-dN8VTnvRLV276FwW5PMR7Ynjxf_Rg1eKt9djmlU9zJXiaMBr7Bg7n0HCX2qsx9D=s900-c-k-c0x00ffffff-no-rj' },
    { Name: '花芽すみれ', Birth: '4/2', YoutubeLink: 'https://www.youtube.com/@KagaSumire', Picture: 'https://yt3.googleusercontent.com/yfURgusjOeRXgE1WmQcy80txikMwQvrNZ762DOSrdRPJL4PoRKxVd3csZPFV0lsfaGCovRmdvQ=s176-c-k-c0x00ffffff-no-rj' },
    { Name: '一ノ瀬うるは', Birth: '12/23', YoutubeLink: 'https://www.youtube.com/@uruhaichinose', Picture: 'https://yt3.googleusercontent.com/ytc/AGIKgqOlWoO2JSpqj-37ka0VWTdYI1pGhDWMealzY_vH=s176-c-k-c0x00ffffff-no-rj' },
    { Name: '小雀とと', Birth: '10/10', YoutubeLink: 'https://www.youtube.com/@totokogara', Picture: 'https://yt3.googleusercontent.com/ytc/AGIKgqOeEbGq8gy5fRGOJ-oskJ6QEJxQBMBeXLg-9Ubb=s176-c-k-c0x00ffffff-no-rj' },
    { Name: '橘ひなの', Birth: '11/11', YoutubeLink: 'https://www.youtube.com/@hinanotachiba7', Picture: 'https://yt3.googleusercontent.com/76a_ty_OwF-nJWNuuxxeJokcgqlmkKCHwXSto9cKKkyjPO2agiu5Tc7t4f6dz5uaab7X8U5mVQ=s176-c-k-c0x00ffffff-no-rj' },
    { Name: '胡桃のあ', Birth: '2/13', YoutubeLink: 'https://www.youtube.com/@963Noah', Picture: 'https://yt3.googleusercontent.com/kw0dKilTsam6dKpTQ0piEb04AgoB6DDXVgQNGJQV7Tg1Pt7mazr7tcEWMP4ovm3w9ZFlIXFpFw=s176-c-k-c0x00ffffff-no-rj' },
    { Name: '如月れん', Birth: '5/5', YoutubeLink: 'https://www.youtube.com/@ren_kisaragi__', Picture: 'https://yt3.googleusercontent.com/U2M8O-qwS0vrjAr7nYk9y58xAV-I80eRn1jn1MX6pmsGcMdtUhMmgRekSAun2ca2Db7ntFuwwQ=s176-c-k-c0x00ffffff-no-rj' },
    { Name: '神成きゅぴ', Birth: '5/18', YoutubeLink: 'https://www.youtube.com/@KaminariQpi', Picture: 'https://yt3.googleusercontent.com/83sEziNDVt1HoBeo4JXIBXjA3DMGCxxyCLmCig9nml-h7f5bPMvczmtgh8TQUqzaOEoc-0lFgg=s176-c-k-c0x00ffffff-no-rj' },
    { Name: '兎咲ミミ', Birth: '3/3', YoutubeLink: 'https://www.youtube.com/@tosakimimi3369', Picture: 'https://yt3.googleusercontent.com/q3SKZBWy8lyeSBcvjlo6E2lc9IeX6ZeIWp2wDMROGGfsjrkJCjGt7Nk2T1dAFhpHAl2wLl_A=s176-c-k-c0x00ffffff-no-rj' },
    { Name: '英リサ', Birth: '6/3', YoutubeLink: 'https://www.youtube.com/@lisahanabusa', Picture: 'https://yt3.googleusercontent.com/ytc/AGIKgqPZQJVUkxzRUqYUQO2ht8y1gy4PBRUMvLC-FJl7=s176-c-k-c0x00ffffff-no-rj' },
    { Name: '八雲べに', Birth: '9/25', YoutubeLink: 'https://www.youtube.com/@yakumo_beni', Picture: 'https://yt3.googleusercontent.com/TaSlDiG5kna6N97pSfFntREvdnSy5AOorOIvT7VxvD9CkG17nd1vWligkJVnhgqrIFHxa2-wZw=s176-c-k-c0x00ffffff-no-rj' },
    { Name: '藍沢エマ', Birth: '1/31', YoutubeLink: 'https://www.youtube.com/@AizawaEma', Picture: 'https://yt3.googleusercontent.com/oIps6UVvqtpJykcdjYYyRvhdcyVoR1wAdH8CnTp4msMaKYdn8XMLj4FHsLoqfWaJzbLJKSPjCg=s176-c-k-c0x00ffffff-no-rj' },
    { Name: '空澄セナ', Birth: '1/18', YoutubeLink: 'https://www.youtube.com/@asumi_sena', Picture: 'https://yt3.googleusercontent.com/7M4bq-eX19nDu1Mzf6RWdHSpyCNP1USrfJ2oTfWgCTiIv31G3-7Sbdf4QzTRemQiEYRTEE0L9g=s176-c-k-c0x00ffffff-no-rj' },
    { Name: '紫宮るな', Birth: '2/22', YoutubeLink: 'https://www.youtube.com/@shinomiyaruna', Picture: 'https://yt3.googleusercontent.com/nHOf1h_guQXgrCw-E3rDcEKV2r8wvOUys7_3lrvKsDWu-Fbf5VT_mBwCNglvWpaNGonWWjmcdQ=s176-c-k-c0x00ffffff-no-rj' },
    { Name: '猫汰つな', Birth: '11/27', YoutubeLink: 'https://www.youtube.com/@tsuna_nekota', Picture: 'https://yt3.googleusercontent.com/5cB1RxA8O44yMKNGvEMqvS3E1FaTloSC1GoTfY48kjAcxllPwyySVO9ioRoSfLSKFATLJycV=s176-c-k-c0x00ffffff-no-rj' },
    { Name: '白波らむね', Birth: '3/21', YoutubeLink: 'https://www.youtube.com/@shiranamiramune', Picture: 'https://yt3.googleusercontent.com/89CDsuDU9WD9o-_LQg1hqEvntFzihLLPnIx5mR4A0oBs0jc6pGV_aMdWz8CO3T-WbURePtdGbA=s176-c-k-c0x00ffffff-no-rj' },
    { Name: '小森めと', Birth: '12/10', YoutubeLink: 'https://www.youtube.com/@Met_Komori', Picture: 'https://yt3.googleusercontent.com/oKj3QGssTroRn-2D7T3bqcDpYY2ha10PUx0aXRcQYRn8V1sAKvOJG4lTLUtuKYAeGMrevpcOYw=s176-c-k-c0x00ffffff-no-rj' },
    { Name: '夢野あかり', Birth: '5/5', YoutubeLink: 'https://www.youtube.com/@akarindao', Picture: 'https://yt3.googleusercontent.com/oIDXQDZsMSTeGShVPE_-CAifw4duLe5z-8_6zhT3x3cenZq0KScM6UH0Y6Gva9k-p648YDrNMA=s176-c-k-c0x00ffffff-no-rj' },
  ]
}
