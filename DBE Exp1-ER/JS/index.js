$(document).ready(function(){
    var data1 = "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17";
    var img_url = data1.split(" ");
    
    var data2="Entity\nAttributes\nMapping Cardinalities\nBinary Relationship and Cardinality\nParticipation Constraints\nGeneralization\nSpecialization\nInheritance";
    var titles=data2.split("\n"); 
    
    var entity= "&emsp;&emsp;An entity can be a real-world object, either animate or inanimate, that can be easily identifiable." 
    +"For example, in a school database, students, teachers, classes, and courses offered can be considered as entities."
    +"All these entities have some attributes or properties that give them their identity.<br>&emsp;&emsp;An entity set is a collection"
    +"of similar types of entities. An entity set may contain entities with attribute sharing similar values. For example,"
    +" a Students set may contain all the students of a school; likewise a Teachers set may contain all the teachers of a"
    +" school from all faculties. Entity sets need not be disjoint.<br><br>Entities are represented by means of rectangles. Rectangles are named with the entity set they represent.";

    var attr ="&emsp;&emsp;Entities are represented by means of their properties, called attributes."
    +"All attributes have values.For example, a student entity may have name, class, and age as attributes.<br>&emsp;&emsp;There exists"
    +" a domain or range of values that can be assigned to attributes. For example, a student's name cannot be a numeric value."
    +"It has to be alphabetic. A student's age cannot be negative, etc. <br><br>Attributes are the properties of entities. Attributes are represented by means of ellipses. Every ellipse represents one attribute and is directly connected to its entity (rectangle).";
    
    var comp_attr= "<strong>Composite Attributes:</strong><br><br>If the attributes are composite, they are further divided in a tree like structure. Every node is then connected to its attribute. That is, composite attributes are represented by ellipses that are connected with an ellipse."
    +"<br><br>In this diagram, Name is a Composite Attribute as it is further divided into First Name and Last Name";

    var mul_attr="<strong>Multivalued Attributes:</strong><br><br>Multivalued attributes are depicted by double ellipse.<br><br>"
    +"In this case, Phone No. is a Multivalued Attribute";

    var der_attr="<strong>Derived Attributes:</strong><br><br>Derived attributes are depicted by dashed ellipse."+
    "<br><br>Here, Age is a derived attribute because it is derived from Birth Date Attribute";

    var mc1="Cardinality defines the number of entities in one entity set, which can be associated with the number of "
    +"entities of other set via relationship set.<br><br><strong>One-to-one:</strong><br><br>One entity from entity set A can"
    +" be associated with at most one entity of entity set B and vice versa.";

    var mc2="<strong>One-to-many:</strong><br><br>One entity from entity set A can be associated with more than one entities of entity set B however an entity from entity set B, can be associated with at most one entity.";

    var mc3="<strong>Many-to-one:</strong><br><br>More than one entities from entity set A can be associated with at most one entity of entity set B, however an entity from entity set B can be associated with more than one entity from entity set A.";

    var mc4="<strong>Many-to-many:</strong><br><br>One entity from A can be associated with more than one entity from B and vice versa.";

    var rel1="A relationship where two entities are participating is called a binary relationship."
    +" Cardinality is the number of instance of an entity from a relation that can be associated with the relation.<br><br>"+
    "<strong>One-to-one:</strong><br>When only one instance of an entity is associated with the relationship, it is marked"
    +"as '1:1'. The following image reflects that only one instance of each entity should be associated with the relationship. It depicts one-to-one relationship.";

    var rel2="<strong>One-to-many:</strong><br><br>When more than one instance of an entity is associated with a"
    +"relationship, it is marked as '1:N'. The following image reflects that only one instance of entity on the left"
    +" and more than one instance of an entity on the right can be associated with the relationship. It depicts one-to-many relationship.";

    var rel3="<strong>Many-to-one:</strong><br><br>When more than one instance of entity is associated with the"
    +"relationship, it is marked as 'N:1'. The following image reflects that more than one instance of an entity on the"
    +" left and only one instance of an entity on the right can be associated with the relationship. It depicts"
    +" many-to-one relationship.";

    var rel4="<strong>Many-to-many:</strong><br><br>The following image reflects that more than one instance of an entity"
    +" on the left and more than one instance of an entity on the right can be associated with the relationship. It depicts many-to-many relationship.";

    var pc = "<strong>Total Participation:</strong><br>Each entity is involved in the relationship. Total participation is represented by double lines.<br><br>"
    +"<strong>Partial participation:</strong><br>Not all entities are involved in the relationship. Partial participation is represented by single lines.";

    var gen="The process of generalizing entities, where the generalized entities contain the properties of all the"
    +" generalized entities, is called generalization. In generalization, a number of entities are brought together into"
    +" one generalized entity based on their similar characteristics.<br><br> For example, pigeon, house sparrow, crow "
    +"and dove can all be generalized as Birds.";

    var spl="Specialization is the opposite of generalization. In specialization, a group of entities is divided into"
    +" sub-groups based on their characteristics. Take a group ‘Person’ for example. A person has name, date of birth,"
    +" gender, etc. These properties are common in all persons, human beings. But in a company, persons can be identified"
    +" as employee, employer, customer, or vendor, based on what role they play in the company."
    +"<br><br>Similarly, in a school database, persons can be specialized as teacher, student, or a staff, "+
    "based on what role they play in school as entities.";

    var inh="The details of entities are generally hidden from the user; this process known as abstraction.Inheritance"
    +" is an important feature of Generalization and Specialization. It allows lower-level entities to inherit the attributes of higher-level entities."+
    "<br><br>For example, the attributes of a Person class such as name, age, and gender can be inherited by lower-level entities such as Student or Teacher.";


    var data3 = [entity,attr,comp_attr,mul_attr,der_attr,mc1,mc2,mc3,mc4,rel1,rel2,rel3,rel4,pc,gen,spl,inh];
    var i=0;

    $("#playBtn").show();
    $("#nextBtn").hide();
    $("#imgSection").hide();
    $("#explaination").hide();
    $('#title').hide();

    $("#playBtn").click(function(){
        i=0;
        $(this).hide();
        $("#nextBtn").show();
        $('#imgSection').show();
        $("#explaination").show();
        $('#title').show();
        document.getElementById('image').src="images/"+img_url[0]+".png";
        document.getElementById('image').style.height="150px";
        document.getElementById('explaination').innerHTML=data3[0];
        document.getElementById('title').innerHTML=titles[0];
        i++;        
    });
    
    $("#nextBtn").click(function(){

        document.getElementById('image').style.height="350px";

        if(i==img_url.length){
            alert("You have reached end of simulation\nBy Clicking OK simulation will end");
            $("#playBtn").show();
            $("#nextBtn").hide();
            $("#imgSection").hide();
            $("#explaination").hide();
            $('#title').hide();
            i=0;    
        }
        if(i>0 && i<5){
            document.getElementById('title').innerHTML=titles[1];
        }
        if(i>4 && i<9){
            document.getElementById('title').innerHTML=titles[2];
        }
        if(i>8 && i<13){
            document.getElementById('title').innerHTML=titles[3];
            document.getElementById("image").style.height="250px";
        }
        if(i==13){
            document.getElementById('title').innerHTML=titles[4];
            document.getElementById("image").style.height="250px";
        }
        if(i==14){
            document.getElementById('title').innerHTML=titles[5];
        }
        if(i==15){
            document.getElementById('title').innerHTML=titles[6];
        }
        if(i==16){
            document.getElementById('title').innerHTML=titles[7];
        }

        document.getElementById('image').src="images/"+img_url[i]+".png";   
        document.getElementById('explaination').innerHTML=data3[i];
        i++;        
                                   
    });
   
    $("#resetBtn").click(function(){
        $("#playBtn").show();
        $("#nextBtn").hide();
        $("#imgSection").hide();
        $("#explaination").hide();
        $('#title').hide();
        i=0;
    });        
});