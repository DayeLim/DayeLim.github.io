var papers = create2DArray(13, 6);
// 제목
// 연도, 저널명
// 저자들
// DOI
// pdf
// 상대 경로는 오픈, 절대 경로는 다운로드
papers[16] = ["Slow Magnetoacoustic Oscillations in Stellar Coronal Loops",
             "2022",
             "Astrophysical Journal, 931, 63",
             "Daye Lim, Valery M. Nakariakov, and Yong-Jae Moon",
             "10.3847/1538-4357/ac69d8"]
papers[15] = ["Active region and flare ribbon properties associated with X-class flares and CMEs of solar cycle 24",
             "2022",
             "Astrophysics and Space Science, 367, 33",
             "P. Vijayalakshmi, A. Shanmugaraju, M. Bendict Lawrance, Yong-Jae Moon, Daye Lim, C. K. Balaji, and P. Hemalatha",
             "10.1007/s10509-022-04061-6"]
papers[14] = ["Selection of three (extreme)ultraviolet channels for solar satellite missions by deep learning",
             "2021",
             "Astrophysical Journal Letters, 915, L31",
             "Daye Lim, Yong-Jae Moon, Eunsu Park, and Jin-Yi Lee",
             "10.3847/2041-8213/ac0d54"]
papers[13] = ["Visual explanation of a deep learning solar flare forecast model and its relationship to physical parameters",
             "2021",
             "Astrophysical Journal, 910, 8",
             "Kangwoo Yi, Yong-Jae Moon, Daye Lim, Eunsu Park, and Harim Lee",
             "10.3847/1538-4357/abdebe"]
papers[12] = ["Super-resolution of SDO/HMI magnetograms using novel deep learning methods",
             "2020",
             "Astrophysical Journal Letters, 897, L32",
             "Sumiaya Rahman, Yong-Jae Moon, Eunsu Park, Ashraf Siddique, Il-Hyun Cho, and Daye Lim",
             "10.3847/2041-8213/ab9d79"]
papers[11] = ["Higher radial harmonics of sausage oscillations in coronal loops",
             "2020",
             "Astrophysical Journal, 893, 62",
             "Daye Lim, Valery M. Nakariakov, Dae Jung Yu, Il-Hyun Cho, and Yong-Jae Moon",
             "10.3847/1538-4357/ab7d3d"]
papers[10] = ["De-noising SDO/HMI solar magnetograms by image translation method based on deep learning",
             "2020",
             "Astrophysical Journal Letters, 891, L4",
             "Eunsu Park, Yong-Jae Moon, Daye Lim, and Harim Lee",
             "10.3847/2041-8213/ab74d2"]
papers[9] = ["Forecast of major solar x-ray flare flux profiles using novel deep learning models",
             "2020",
             "Astrophysical Journal Letters, 890, L5",
             "Kangwoo Yi, Yong-Jae Moon, Gyungin Shin, and Daye Lim",
             "10.3847/2041-8213/ab701b"]
papers[8] = ["Ensemble forecasting of major solar flares with short-, mid-, and long-term active region properties",
             "2019",
             "Astrophysical Journal, 885, 35",
             "Daye Lim, Yong-Jae Moon, Jongyeob Park, Eunsu Park, Kangjin Lee, Jin-Yi Lee, and Soojeong Jang",
             "10.3847/1538-4357/ab45e7"]
papers[7] = ["Generation of solar UV and EUV images from SDO/HMI magnetograms by deep learning",
             "2019",
             "Astrophysical Journal Letters, 884, L23",
             "Eunsu Park, Yong-Jae Moon, Jin-Yi Lee, Harim Lee, Daye Lim, Gyungin Shin, and Taeyoung Kim",
             "10.3847/2041-8213/ab46bb"]
papers[6] = ["Forecast of daily major flare probability using relationships between vector magnetic properties and flaring rates",
             "2019",
             "Journal of the Korean Astronomical Society, 52, 133",
             "Daye Lim, Yong-Jae Moon, Jongyeob Park, Eunsu Park, Kangjin Lee, Jin-Yi Lee, and Soojeong Jang",
             "10.5303/JKAS.2019.52.4.133"]
papers[5] = ["Solar farside magnetograms from deep learning analysis of STEREO/EUVI data",
             "2019",
             "Nature Astronomy, 3, 397",
             "Taeyoung Kim, Eunsu Park, Harim Lee, Yong-Jae Moon, Sung-Ho Bae, Daye Lim, Soojeong Jang, Lokwon Kim, Il-Hyun Cho, Myungjin Choi, and Kyung-Suk Cho",
             "10.1038/s41550-019-0711-5"]
papers[4] = ["Application of the deep convolutional neural network to the forecast of solar flare occurrence using full-disk solar magnetograms",
             "2018",
             "Astrophysical Journal, 869, 91",
             "Eunsu Park, Yong-Jae Moon, Seulki Shin, Kangwoo Yi, Daye Lim, Harim Lee, and Gyungin Shin",
             "10.3847/1538-4357/aaed40"]
papers[3] = ["Sausage oscillations in a plasma cylinder with a surface current",
             "2018",
             "Journal of Atmospheric Solar-Terrestrial Physics, 175, 49",
             "Daye Lim, Valery M. Nakariakov, and Yong-Jae Moon",
             "10.1016/j.jastp.2018.04.013"]
papers[2] = ["Coronal thick target hard X-ray emissions and radio emissions",
              "2013",
              "Astrophysical Journal Letters, 769, L11",
              "Jeongwoo Lee, Daye Lim, G. S. Choe, Kap-Sung Kim, and Minhwan Jang",
              "10.1088/2041-8205/769/1/L11"]
papers[1] = ["Loss cone-driven cyclotron maser instability",
              "2013",
              "Journal of Geophysical Research, 118, 7035",
              "Sang-Yun Lee, Sibaek Yi, Dayeh Lim, Hee-Eun Kim, Jungjoon Seough, and Peter H. Yoon",
              "10.1002/2013JA019298"]
papers[0] = ["Z-mode maser instability",
              "2013",
              "Journal of Geophysical Research, 118, 7584",
              "Sibaek Yi, Sang-Yun Lee, Hee-Eun Kim, Dayeh Lim, Jungjoon Seough, P. H. Yoon, M. C. Broughton, and J. LaBelle",
              "10.1002/2013JA019376"]

window.onload = function() {
    var name = document.getElementById('name');
    name.innerHTML = 'Daye Lim';
    var beauty = document.createElement('img');
    beauty.id = "Beauty";
    beauty.src = "picture/Beauty.jpg";
    beauty.alt = "Beauty";
    name.appendChild(beauty);

    var orcid = document.createElement('img');
    orcid.id = "img_orcid_qr";
    orcid.src = "picture/QRcode_orcid_daye_lim.png";
    orcid.alt = "orcid";
    orcid.title = "ORCiD";
    name.appendChild(orcid);

    var logo = document.createElement('img');
    logo.id = "img_logo";
    logo.src = "picture/Research_logo.png";
    logo.alt = "logo";
    name.appendChild(logo);

    var info_1 = document.getElementsByClassName("info_1");
    var course = document.createElement('div');
    course.id = "course";
    info_1[0].appendChild(course);
    course.innerHTML = "Post-doc, Centre for mathematical Plasma-Astrophysics, KU Leuven";
    var email = document.createElement('div');
    email.id = "email";
    info_1[0].appendChild(email);
    email.innerHTML = "daye.lim@kuleuven.be";
    var email_01 = document.createElement('div');
    email_01.id = "email_01";
    info_1[0].appendChild(email_01);
    email_01.innerHTML = "dayelim38@gmail.com";
    var email_02 = document.createElement('div');
    email.id = "email";
    info_1[0].appendChild(email);
    email.innerHTML = "dalim@khu.ac.kr";
    var div_orcid = document.createElement('div');
    div_orcid.id = "orcid";
    info_1[0].appendChild(div_orcid);
    div_orcid.innerHTML = "ORCiD: ";

    var link_orcid = document.createElement('a');
    link_orcid.className = "linkorcid";
    link_orcid.href = "https://orcid.org/0000-0001-9914-9080";
    link_orcid.target = "_blank";
    div_orcid.appendChild(link_orcid);
    link_orcid.innerHTML = "0000-0001-9914-9080";

    var p_length = papers.length-1;
    var boxes = document.getElementsByClassName('boxes');

    for(var i in papers) {    
        var div_box = document.createElement('div');
        div_box.className = 'box';
        boxes[0].appendChild(div_box);
    }

    var box = document.getElementsByClassName('box');
    
    for(var i in papers) {
        var div_paper = document.createElement('div');
        div_paper.className = 'paper';    
        box[i].appendChild(div_paper);
    }
    
    var paper = document.getElementsByClassName('paper');

    for(var i in papers.reverse()) {
        var div_papertitle = document.createElement('div');
        div_papertitle.className = 'div_papertitle';
        div_papertitle.innerHTML = p_length-i+1+'. '+papers[i][0];

        paper[i].appendChild(div_papertitle);

        var div_paperyear = document.createElement('div');
        div_paperyear.className = 'div_paperyear';
        div_paperyear.innerHTML = papers[i][1];

        paper[i].appendChild(div_paperyear);

        var div_paperjournal = document.createElement('div');
        div_paperjournal.className = 'div_paperjournal';
        div_paperjournal.innerHTML = papers[i][2];

        paper[i].appendChild(div_paperjournal);

        var div_papernames = document.createElement('div');
        div_papernames.className = 'div_papernames';
        if(papers[i][3].match("Daye Lim")) {
            div_papernames.innerHTML = papers[i][3].replace("Daye Lim", "<u><b>Daye Lim</b></u>");
        } else if(papers[i][3].match("Dayeh Lim")) {
            div_papernames.innerHTML = papers[i][3].replace("Dayeh Lim", "<u><b>Dayeh Lim</b></u>");
        } else {
        }

        paper[i].appendChild(div_papernames);

        var div_paperDOI = document.createElement('div');
        div_paperDOI.className = 'div_paperDOI';
        div_paperDOI.innerHTML = 'DOI: ';

        paper[i].appendChild(div_paperDOI);

        // var a_paperlink = document.createElement('a');
        // a_paperlink.className = 'paperlink';
        // a_paperlink.target = '_blank';
        // a_paperlink.href = papers[i][5];
        // a_paperlink.innerHTML = '[pdf]';

        // paper[i].appendChild(a_paperlink);
    }

    var div_linkpaperDOI = document.getElementsByClassName('div_paperDOI');
    
    for(var i in papers) {
        var a_linkpaperDOI = document.createElement('a');
        a_linkpaperDOI.className = 'a_linkpaperDOI';
        a_linkpaperDOI.href = 'https://doi.org/'+papers[i][4];
        a_linkpaperDOI.innerHTML = papers[i][4];
        a_linkpaperDOI.target = '_blank';

        div_linkpaperDOI[i].appendChild(a_linkpaperDOI);
    }
};

function create2DArray(rows, columns) {
    var arr = new Array(rows);
    for (var i = 0; i < rows; i++) {
        arr[i] = new Array(columns);
    }
    return arr;
}
