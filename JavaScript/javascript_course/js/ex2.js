var c1=document.getElementById("celsius_1").innerHTML;
var c2=document.getElementById("celsius_2").innerHTML;
var c3=document.getElementById("celsius_3").innerHTML;
function fahran(C){
    return (9 * C / 5) + 32;
}
document.getElementById("fahr_1").innerHTML=fahran(c1)
document.getElementById("fahr_2").innerHTML=fahran(c2)
document.getElementById("fahr_3").innerHTML=fahran(c3)

var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ]; 
document.getElementById("best_students").innerHTML = classification.slice(-3);

var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
}
document.getElementById("course_title").innerHTML = course.title;
document.getElementById("main_category").innerHTML = course.categories[0];
document.getElementById("reviews_5_stars").innerHTML = 420*100/(420+80+33+20+4) + "%";

var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 
 shoppingList.pop()
 shoppingList.unshift("Chocolate")
 console.log(shoppingList)
 shoppingList.push("Cheese", "Eggs")
 console.log(shoppingList)



