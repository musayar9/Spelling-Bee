## Teknolojiler

![NexttJs](https://img.shields.io/badge/NextJs-14.2.3-yellowgreen)
![React](https://img.shields.io/badge/React-^18-green)
![React-Icons](https://img.shields.io/badge/react--icons-5.2.1-yellow)
![React-Loader-Spinner](https://img.shields.io/badge/react--loader--spinner-6.1.6-blue)
![React-Toastify](https://img.shields.io/badge/react--toastify-10.0.5-red)
![tailwindcss](https://img.shields.io/badge/tailwindcss-3.4.1-lightgreen)
![daisyui](https://img.shields.io/badge/daisyui-4.11.1-pink)

## İçerik

Bu projede NextJs ve Tailwindcss kullanılarak bir `Spelling Bee Game`. oyunu geliştirildi

Proje içinde durum (state) yönetimi için useContext yapısı kullanıldı. Burada oluşturulan değişkenler diğer bileşenlere (components) dağıtıldı.

Bu oyunda oyuncuya 7 harf veriliyor. Bu yedi harf kullanılarak oluşturulabilecek kelimeleri bulmaya çalışıyorsunuz. Kelimeleri bulmak için bir dakikanız var. Doğru bulduğunuz her kelime için 15 saniye ve kelimenin uzunluğu kadar puan kazanacaksınız.Her doğru yanıttan sonra verilen harflerin yeri değişmektedir. Her yanlış kelime için 2 puan kaybedeceksiniz.

![img-1](public/images/1.jpg)

Oyun ilk yüklendiğinde, ana sayfada oyuncuya oyun hakkında bilgilendirme yapılır. Oyuncuya oyunu oynamak için Türkçe ve İngilizce versiyonları seçme imkanı sunulur. Oyuncu hangi versiyonu seçerse, oyunu o dilde oynayacak ve kelimeleri o dil yapısına uygun olarak bulmaya çalışacaktır.

## Türkçe version

![img-2](public/images/2.jpg)

Yukarıdaki resimde oyunun türkçe versionunu görüyorsunuz.

Sayfada;

- Yeşil okla gösterilen alan, oyun için kullanıcıya verilen süreyi gösteriyor.

- Mavi okla gösterilen alan, oyuncunun kazandığı puanı gösteriyor.

- Sarı okla gösterilen alan, oyuncunun kelime gireceği yerdir.

- Gri okla gösterilen alanda, kullanıcının girdiği kelimenin çıktısı gösterilecek.

- Sarı okla gösterilen alan ise kullanıcıya sunulan 7 harfli olduğu alanı gösteriyor.

## Doğru Kelime

![img-3](public/images/3.jpg)

Kullanıcı doğru kelimeyi bulduğunda;

- Ekranın ortasında doğru bildiğine dair bir bilgilendirme mesajı çıkmaktadır.

- Doğru kelime'yi bulduğunda süresine +15 saniye eklenmektedir.

- Kelimenin uzunluğuna göre puan kazanmaktadır. Örneğin `tanım` kelimesini buldu o zaman 5 puan kazanmaktadır.

- Bulunan her kelime `kelimelerin` adlı tablo içine eklenmektedir
  ![img-4](public/images/4.jpg)
