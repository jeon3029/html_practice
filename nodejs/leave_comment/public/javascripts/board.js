function show_result() {
    var title = this.comment_title.value;
    var content = this.comment_content.value;
    var userid = this.comment_userid.value;
    var email = this.comment_email.value;
    var datetime = this.comment_datetime.value;
}

function reset_input() {
    this.comment_title.value = "";
    this.comment_content.value = "";
    this.comment_userid.value = "";
    this.comment_email.value = "";
}
