const message = `HBDDD SYAKIRAAA! 🎉

Selamat ulang tahun untuk orang yang paling special, orang yang selalu aku tunggu setiap harinya, orang yang membuat hidupku lebih bermakna, orang yang selalu aku pikirkan.

Syakira, semoga hari istimewamu ini penuh dengan kebahagiaan, cinta, dan berkah dari Tuhan. Semoga tahun ini membawa banyak keberuntungan dan pencapaian indah untukmu. I love you so much, Syakira. ❤️

Dulu awalnya aku masuk Insan Kamil, aku hanya sekedar siswa baru yang penuh rasa takut dan cemas. Tapi semua berubah ketika aku bertemu denganmu, Syakira.

Kamu adalah cahaya yang menerangi hari-hariku yang gelap. Dari hari pertama aku mengenalmu, aku sudah tahu bahwa kamu adalah orang yang berbeda, orang yang special.

Kamu tidak hanya cantik dari sisi fisik, tetapi juga memiliki hati yang sangat baik dan mulia. Setiap senyuman mu membuat hatiku menjadi lebih tenang.

Sekarang aku mau cerita selama di SMK, waktu itu aku masih SMP dan kamu adalah senior yang aku tunggu setiap hari untuk bertemu denganmu di sekolah.

Aku masih ingat ketika aku pertama kali melihatmu di lapangan sekolah, hatiku langsung berdebar-debar. Dari saat itu, aku mulai menyukai mu.

Tapi aku tahu bahwa aku hanya sekedar junior mu, jadi aku hanya bisa diam-diam menyukaimu tanpa berani untuk mengatakannya. Tapi sekarang, aku sudah berani untuk mengatakannya kepadamu: AKU CINTA KAMU SYAKIRA.

Sebagai penutupan, aku mau meminta maaf kepada mu karena pernah membuat mu sedih, kesal, dan marah. Aku tahu bahwa aku bukanlah orang yang sempurna, dan aku punya banyak kekurangan.

Tapi aku janji akan terus berusaha untuk menjadi lebih baik demi dirimu. Aku akan selalu mencintaimu dengan sepenuh hatiku, dan aku akan selalu mendampingimu dalam setiap langkah hidupmu.

Happy Birthday Syakira! 🎂🎁
Forever yours, Kade ❤️`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}