export interface AboutMeType {
  bannerData: BannerDataType;
  briefData: BriefDataType;
}

export interface BannerDataType {
  infoText: string;
  profileImage: string;
}

export interface BriefDataType {
  headline: string;
  techStacks: techStackType[];
}

export interface techStackType {
  id: number;
  altText: string;
  imageUrl: string;
}
