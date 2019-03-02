






function changeLi() {
    var getLi = document.getElementsByTagName("li");
    var getUl = document.getElementById("navbar-collapse");

    for (var i = 0; i < getLi.length; i++) {
        getLi[i].onclick = function() {
            removeClass(getLi, "active");
            getUl.classList.remove("in");
            this.setAttribute("class", "active");
            render(this.querySelector('a'));

        }
    }
}

function removeClass(els, kliss) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList.remove(kliss);
    }
}
function creatP(el) {
    var p1 = document.createElement("p");
    p1.innerHTML = "<div class='contai2 '><div class='about'><img src='http://ww1.sinaimg.cn/large/005OFz2fgy1g0oamklhadj30zk0jodj4.jpg'><p><a href='http://weibo.com/chens0529'>Weibo</a> <a href='https://www.instagram.com/ShikChann'>Instagram</a></p><p>WeChat: Acaovohdt</p><p>Mail：chikchann(at)gmail.com</p></div></div>";el.appendChild(p1);
}
function render(el) {
    var images = {
        shanghai: [{
            title: 'shanghai1',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9jdtpdej31xe1a9x6q.jpg'
        },{
            title: 'shanghai2',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9omwf79j31xe1a9b2b.jpg'
        },{
            title: 'shanghai3',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9o0c1gpj31xe1a9qv5.jpg'
        },{
            title: 'shanghai4',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9o8iqrij31xe1a91ky.jpg'
        },{
            title: 'shanghai5',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9op99uwj31xe1a9npf.jpg'
        },{
            title: 'shanghai6',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9omi2s0j31xe1a9u0y.jpg'
        },{
            title: 'shanghai7',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9o7flwyj31xe1a9hdu.jpg'
        },{
            title: 'shanghai8',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9ojx2pvj31xe1a97wj.jpg'
        },{
            title: 'shanghai9',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9os6lkbj31xe1a9kjn.jpg'
        },{
            title: 'shanghai10',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9oqf7bvj31xe1a94qr.jpg'
        },{
            title: 'shanghai11',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9nx21koj31xe1a9dyp.jpg'
        },{
            title: 'shanghai12',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9o9x4ahj31xe1a97wi.jpg'
        },{
            title: 'shanghai13',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9oanqtsj31xe1a9kjl.jpg'
        },{
            title: 'shanghai14',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9o2rfpfj31xe1a91kx.jpg'
        }, ],
        beijing: [{
            title: 'beijing1',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9ty1u6vj31xe1a9x6q.jpg'
        },{
            title: 'beijing2',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9tw7cqlj31xe1a9x6q.jpg'
        },{
            title: 'beijing3',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9u2dzyyj31xe1a9npe.jpg'
        },{
            title: 'beijing4',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9tjp4g4j31xe1a97wi.jpg'
        },{
            title: 'beijing5',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9tjq8kbj31xe1a9e82.jpg'
        },{
            title: 'beijing6',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9tzrknlj31xe1a9x6q.jpg'
        },{
            title: 'beijing7',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9ukk3z0j31xe1a9b2b.jpg'
        },{
            title: 'beijing8',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9ugdawrj31xe1a97wj.jpg'
        },{
            title: 'beijing9',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9tks3gdj31xe1a9e82.jpg'
        },{
            title: 'beijing10',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9uc44s2j31xe1a91kz.jpg'
        },{
            title: 'beijing11',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9udlocvj31xe1a91kz.jpg'
        },{
            title: 'beijing12',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9tkaozcj31xe1a97wi.jpg'
        },{
            title: 'beijing13',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9uex3onj31xe1a94qr.jpg'
        },{
            title: 'beijing14',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9tyf4nxj31xe1a9u0y.jpg'
        },{
            title: 'beijing17',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9ubrq5dj31xe1a9x6q.jpg'
        },{
            title: 'beijing18',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9tn8bdhj31xe1a91ky.jpg'
        },{
            title: 'beijing19',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9ujtylyj31xe1a91kz.jpg'
        },{
            title: 'beijing20',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9uldtknj31xe1a94qr.jpg'
        },{
            title: 'beijing21',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9tdzj9ij31xe1a94qq.jpg'
        },{
            title: 'beijing22',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9t8hku8j31xe1a9e81.jpg'
        }, ],
        suzhou: [{
            title: 'suzhou1',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9z7594zj31xe1a97wj.jpg'
        },{
            title: 'suzhou2',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9yu3idrj31xe1a9e82.jpg'
        },{
            title: 'suzhou3',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9z6vdc5j31xe1a9b2a.jpg'
        },{
            title: 'suzhou4',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9z535yjj31xe1a9u0y.jpg'
        },{
            title: 'suzhou5',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9yumz4aj31xe1a9b2a.jpg'
        },{
            title: 'suzhou6',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9z1qp6kj31xe1a9qv6.jpg'
        },{
            title: 'suzhou7',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9z1m6sij31xe1a9npe.jpg'
        },{
            title: 'suzhou8',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9ywick2j31xe1a9e82.jpg'
        },{
            title: 'suzhou9',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9yubsglj31xe1a94qq.jpg'
        },{
            title: 'suzhou10',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9yov0rnj31xe1a9npd.jpg'
        },],
        tianjin: [{
            title: 'tianjin1',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9zxfj15j31xe1a9hdt.jpg'
        }],
        people: [{
            title: 'people1',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oa63lv2kj31xe1a9npd.jpg'
        },{
            title: 'people3',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oa63pw27j31xe1a9qv5.jpg'
        },{
            title: 'people4',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oa63scr6j31xe1a9kjl.jpg'
        },{
            title: 'people5',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oa62yfkgj31xe1a9npd.jpg'
        },{
            title: 'people6',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oa60z6znj31xe1a9kjl.jpg'
        },{
            title: 'people7',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oa658bjaj31xe1a9hdt.jpg'
        },{
            title: 'people8',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oa6d4x7yj31xe1a97wi.jpg'
        },{
            title: 'people9',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oa6dnugjj31xe1a9x6p.jpg'
        },{
            title: 'people10',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oa65w9b5j31xe1a9npd.jpg'
        },{
            title: 'people11',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oa6fsjfgj31xe1a9b2a.jpg'
        },{
            title: 'people12',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oa6dlmugj31xe1a9kjl.jpg'
        },],
        life: [{
            title: 'life2',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oaa72otcj31xe1a9hdu.jpg'
        },{
            title: 'life1',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oaadagxjj31xe1a9qv6.jpg'
        },{
            title: 'life3',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oa96k52kj31xe1a9e81.jpg'
        },{
            title: 'life4',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oa9we875j31xe1a94qq.jpg'
        },{
            title: 'life5',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oa9vra8ij31xe1a9x6p.jpg'
        },{
            title: 'life6',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oa9e0rdpj31xe1a9qv5.jpg'
        },{
            title: 'life7',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oa9h9ja1j31xe1a9qv5.jpg'
        },{
            title: 'life8',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oa9leoxaj31xe1a9u0x.jpg'
        },{
            title: 'life9',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oa9dmgh8j31xe1a9e81.jpg'
        },{
            title: 'life10',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oa9chbx1j31xe1a9e81.jpg'
        },{
            title: 'life11',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oaae8lwvj31xe1a9kjn.jpg'
        },{
            title: 'life12',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oa9e2fkej31xe1a9kjl.jpg'
        },{
            title: 'life13',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oa99glqzj31xe1a9e81.jpg'
        },{
            title: 'life14',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oa9anhd3j31xe1a9kjl.jpg'
        },{
            title: 'life15',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oaa4mdylj31xe1a91ky.jpg'
        },{
            title: 'life16',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oaa2fnwvj31xe1a9u0x.jpg'
        },{
            title: 'life17',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oa9wxnhuj31xe1a9npd.jpg'
        },{
            title: 'life18',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oa9wqbb7j31xe1a9kjl.jpg'
        },{
            title: 'life19',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oa9ms898j31xe1a9npd.jpg'
        },{
            title: 'life20',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oaa1nv3ij31xe1a9qv5.jpg'
        }
        ],
        //heyangallery: [{
        //    title: '故宫',
        //    url: 'http://odj13j5fo.bkt.clouddn.com/WechatIMG96.jpeg'
        //}],
        Suizhou: [{
            title: 'suizhou6',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9y008lnj31xe1a9x6q.jpg'
        },{
            title: 'suizhou5',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9xve5mij31xe1a9npe.jpg'
        },{
            title: 'suizhou4',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9y1urboj33s02iohdw.jpg'
        },{
            title: 'suizhou3',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9y88foyj33s02ioqv8.jpg'
        },{
            title: 'suizhou1',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9ya0lsmj33s02io7wm.jpg'
        },{
            title: 'suizhou2',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0o9y96hl8j33s02ioe85.jpg'
        }],
        Kunshan: [{
            title: 'kunshan1',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oahdgdcoj31xe1a9e83.jpg'
        },{
            title: 'kunshan2',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oah1ege1j31xe1a9qv5.jpg'
        },{
            title: 'kunshan3',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oah92rutj31xe1a9e82.jpg'
        },{
            title: 'kunshan4',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oah3d9g1j31xe1a9npd.jpg'
        },{
            title: 'kunshan5',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oah615lnj31xe1a9hdt.jpg'
        },{
            title: 'kunshan6',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oahb207qj31xe1a9kjm.jpg'
        },{
            title: 'kunshan7',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oaha61rcj31xe1a97wi.jpg'
        },{
            title: 'kunshan8',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oah9npy5j31xe1a97wi.jpg'
        },],
        Wuxi: [{
            title: 'wuxi1',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oag233hpj31xe1a97wi.jpg'
        },{
            title: 'wuxi2',
            url: 'http://ww1.sinaimg.cn/large/005OFz2fgy1g0oag31f1hj31xe1a9x6p.jpg'
        },]
    }
    var contenter = document.getElementById('contenter');
    //获得data_target属性的值
    var category = el.getAttribute('data-target');
    var tpl = '';
    if (category == 'about') {
        contenter.innerHTML = '';
        creatP(contenter);
        return;
    }
    var categoryImages = images[category];
    console.log(categoryImages);
    for (var i = 0, l = categoryImages.length; i < l; i++) {
        tpl += '<div class="contai"><img src="' + categoryImages[i].url + '"></div>';
    }
    contenter.innerHTML = tpl;
}
window.onload = changeLi();
