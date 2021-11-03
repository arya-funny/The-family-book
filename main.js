var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://clipground.com/images/father-wife-daughter-clipart-17.png" , "https://www.pinclipart.com/picdir/big/578-5787499_cartoon-boy-and-girl-9-years-old-clipart.png", "https://s3.eu-west-2.amazonaws.com/littlewriter-production/stories/2oyvafI2T5.jpeg", "https://clipart.world/wp-content/uploads/2021/06/Mom-and-Daughter-clipart.png"];
var names = ["Fmaily Book","Upasrao Dhore", "Yogesh Dhore", "Arya Dhore", "Ahana Dhore", "Dipti Dhore"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use 
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use 
    var updatedName = names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
