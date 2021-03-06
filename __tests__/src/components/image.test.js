import React from "react"
import renderer from "react-test-renderer"
import ImageComponente from '../../../src/components/image'

describe("ImageComponente", () => {
    it("renders correctly", () => {
      const tree = renderer
        .create(<ImageComponente 
                    Object={{
                        file: {
                        childImageSharp:{
                            fluid:{
                                aspectRatio: 1.1737089201877935,
                                base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEIklEQVQ4y3WTe1BUVRzHD4uV5lQzjZPoNDVWmolIpCQssOzee3dZQFuEcFrbjBDW5bkRiGD2QNBtpCZxFmXZZYHdGstHUfEoKSc0eewLiYhIKsGlBjOHcgYKds+v39mw/okz85nfubv3fs73d869hMyPmZmZWyxGViOPIGump6fjsaqRJJzfgRDGguN4n4SYnYrATTPTM6wGzUsXsQXw+mGsEUg4zh+YFwYtLHRIiK0/lbQOlxJ7f7qovDNY9PbFMNGNmz8/NHVzch3WVb/94b3/+u/jKwcmPggamTxHfvy1e+GEDa5EYnLIRGanPLim5wnSMlRIAGAxcleTR4X/SUnHSDn5+Nsi8u4lNTkxoCHvf52xsJDJEFLvFHDO7axzSKtxCwyMOkd8pdW1tcp+KdVgcSVU4uIrGlxKFiLoGW0JOWKykfyyKlKw7yDJ3XuAHDY2BIQo48OxSuud3AUUA84RDuGh0aMAcw8Pll4B7OelT26HCnLZKNyOHYj+NyEmykbBNZQOoXAW8eH1XL1DmLN44ucMn6pni+16/5FBYToLch68rF9KIF/OtmXBlv3YhsCSYqpulg4X8Zn6OGoekMF7tjQ6YsqEruOrfJPaZa9DBNH8WabQo5DTFb+aukmxvYdPy2zfrFRfyCjc9woTTmCqcnx91qDwChPWu2T+6s9kUHxaDkM59wJEYaB4QiFBBFRCYPbFWPTBseiEdN1jsVvhzVor8Gm7AKWfs5Y3YrvDKPsB6yjbO7NbSg2tUpplFcBcsYGCgLJElCqJF8Ski5ZIrqPQnrKzYFdo3FPw2mEjfZxLg6hEdTc7EHJqMHP+pPmCgNAlnTN0SKneykGJnaff71jun5Uvgamku386L8m6p/zA0f15e8o+3PKs7qN1caoJlI4+Kk6eSHm+4BOUcKLa3uiAENNqWctmt8x3sE1G8008FNliIM+QR5/WdNMdmedAyB4Z5wq9Xunu4TMVxq4QTLoIWYosYe9v4CvBZMEsqcnJqfF0weLmUMjR3DoOCswS0FtTQfXyKIS9cMMv1l6FuN1Xp8RaL0RneVsrm2ngxG8RGPiViCwuBavJFqcSGjxy/6F2gRZZFVDUyEG5TUVPtHXCfmO/LzprDMTZYx0x2ivbYlAeox2vidL9RQTNW8HpOTWif4UISyqxuP4RvtEhp8VNSii2yaC0OQXOnO2ExpYen1j7C8Tqrl2MfM5DUFwVg0njcqdyw1T2/95Fto+Blh1cBPs6LG6eGtp5uqdZCaXvyGGvLQVOnf2C1p38yrdJ0wcb1V8O4GN3rk2oJpszvjkZqemF0C31avzttoDQ6k4SIayutrqSMaFAD7UJ9CVrIpQ0K6C0aRuc7uyitfYWGrKe94eEcRCyPn7svrWRy/DxoJXhysEVG+SwPDTuu78ByPObNdLXFdUAAAAASUVORK5CYII=",
                                sizes: "(max-width: 679px) 100vw, 679px",
                                src: "/static/fc299bb0dde2432db7f768171b09d328/f2073/icon.png",
                                srcSet: "/static/fc299bb0dde2432db7f768171b09d328/e1953/icon.png 250w,\n/static/fc299bb0dde2432db7f768171b09d328/46604/icon.png 500w,\n/static/fc299bb0dde2432db7f768171b09d328/f2073/icon.png 679w"
                            }
                        }}  
                    }}
                />)
        .toJSON()
      expect(tree).toMatchSnapshot()
    });
});