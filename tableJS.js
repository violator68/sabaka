    jQuery(document).ready(function($) {
        $(".clickable-row").click(function() {
            window.location = $(this).data("href");
            this.style.cursor = "default";
        });
        $(".clickable-row").hover(function() {
            this.style.backgroundColor = "#FF2080";
        });
        $(".clickable-row").mouseout(function() {
            this.style.backgroundColor = "";
        });
        $(".img").hover(function() {
            this.parentNode.parentNode.style.backgroundColor = "#FF2080";
            this.height = "200";
        });
        $(".img").mouseout(function() {
            this.parentNode.parentNode.style.backgroundColor = "";
            this.height = "100";
        });
    });