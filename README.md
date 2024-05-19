



https://github.com/musayar9/Spelling-Bee/assets/96313325/2d52ec52-8390-402a-b554-1547e65dcec9




## Teknolojiler

![NexttJs](https://img.shields.io/badge/NextJs-14.2.3-yellowgreen)
![React](https://img.shields.io/badge/React-^18-green)
![React-Icons](https://img.shields.io/badge/react--icons-5.2.1-yellow)
![React-Loader-Spinner](https://img.shields.io/badge/react--loader--spinner-6.1.6-blue)
![React-Toastify](https://img.shields.io/badge/react--toastify-10.0.5-red)
![tailwindcss](https://img.shields.io/badge/tailwindcss-3.4.1-lightgreen)
![daisyui](https://img.shields.io/badge/daisyui-4.11.1-pink)

## İçerik

Bu oyun  NextJs ve Tailwindcss teknolojileri kullanılarak  geliştirildi.

Proje içinde durum (state) yönetimi için useContext yapısı kullanıldı. Burada oluşturulan değişkenler diğer bileşenlere (components) dağıtıldı.

Bu oyunda oyuncuya 7 harf veriliyor. Oyuncuda  bu yedi harf kullanarak oluşturulabilecek kelimeleri bulması isteniyor. Kelimeleri bulmak için bir dakikanız var. Doğru bulduğunuz her kelime için 15 saniye ve kelimenin uzunluğu kadar puan kazanacaksınız.Her doğru yanıttan sonra verilen harflerin yeri değişmektedir. Her yanlış kelime için 2 puan kaybedeceksiniz.

![img-1](public/images/1.jpg)

Oyun ilk yüklendiğinde, ana sayfada oyuncuya oyun hakkında bilgilendirme yapılıyor. Oyuncuya oyunu oynamak için Türkçe ve İngilizce versiyonları seçme imkanı sunuluyor. Oyuncu hangi versiyonu seçerse, oyunu o dilde oynayacak ve kelimeleri o dil yapısına uygun olarak bulmaya çalışacaktır.

## Türkçe version

![img-2](public/images/2.jpg)

Yukarıdaki resimde oyunun türkçe versionunu görüyorsunuz.

Sayfa'da;

- Yeşil okla gösterilen alan, oyun için kullanıcıya verilen süreyi gösteriyor.

- Mavi okla gösterilen alan, oyuncunun kazandığı puanı gösteriyor.

- Sarı okla gösterilen alan, oyuncunun kelime gireceği yerdir.

- Gri okla gösterilen alanda, kullanıcının bulduğu kelimeler bir tablo içinde gösterilecek.

- Sarı okla gösterilen alan ise kullanıcıya sunulan 7 harfin olduğu alanı gösteriyor.

## Doğru Kelime

![img-3](public/images/3.jpg)

Kullanıcı doğru kelimeyi bulduğunda;

- Ekranın ortasında doğru bildiğine dair bir bilgilendirme mesajı çıkmaktadır.

- Doğru kelime'yi bulduğunda süresine +15 saniye eklenmektedir.

- Kelimenin uzunluğuna göre puan kazanmaktadır. Örneğin `tanım` kelimesini buldu o zaman 5 puan kazanmaktadır.

- Bulunan her kelime `kelimelerin` adlı tablo içine eklenmektedir.
  ![img-4](public/images/4.jpg)
- Bulunan kelimeyi bir daha girdiğinizde bu kelimenin önceden bulduğuna dair bilgilendirme mesajı almaktasınız.
  ![img-6](public/images/6.jpg)

## Yanlış Kelime

Oyuncu yanlış kelime girdiğinde veya kelime bulunamadığında;

- Kullanıcının puanından  2 puan silinmektedir.

- Ekranın ortasında yanlış bildiğine dair bir bilgilendirme mesajı çıkmaktadır.

- Kelime yok ise `Kelimen` tablosuna verinin eklenmediğine dair bilgi gösterilmektedir.

![img-5](public/images/5.jpg)

## Sonuç

1. Oyuncuta verilen süre sona erdiğinde;

Oyunucunun girdiği doğru ve yanlış kelime sayısı, kazandığı ve kaybettiği toplam süre ve kazandığı toplam puan hesaplanıp oyuncuya gösterilmektedir.

![img-7](public/images/7.jpg)

2. Oyuncu verilen harfler ilgili tüm kelimeleri bulduğunda ise;

Oyun durmakta ve oyunucuya bir modal açılmaktadır. Bu modal da oyuncuya bütün kelimeleri bulduğunda dair bilgi mesajı verilmekte ve girdiği doğru ve yanlış kelime sayısı, kazandığı ve kaybettiği toplam süre ve kazandığı toplam puan gösterilmektedir.

![img-8](public/images/8.jpg)

Oyuncu süre bittiğinde veya bütün kelimeleri bulduğunda kendi gösterilen tekrar oyna butonuna tıkladığında bu veriler sıfırlanacak ve oyuna yeniden başlayabilecektir.
