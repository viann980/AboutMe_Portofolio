$(document).ready(function() {
    $('.progress-bar-inner').each(function() {
        var $this = $(this);
        var width = $this.data('width') + '%';
        
        // Animasi Progress Bar
        setTimeout(function() {
            $this.css('width', width);
            $this.addClass('animate'); // Tambahkan animasi cahaya
        }, 100); // Penundaan waktu sebelum animasi dimulai
    });
});

$(document).ready(function() {
    $('.progress-bar-inner').each(function() {
        var $this = $(this);
        var width = $this.data('width') + '%';
        
        // Animasi Progress Bar dari kiri ke kanan
        setTimeout(function() {
            $this.css('width', width);
        }, 100); // Penundaan waktu sebelum animasi dimulai
    });
});


