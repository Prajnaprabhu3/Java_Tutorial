package com.Prajna;

import java.util.Scanner;

public class Ch4_DataType_InputOutput_TypeCasting {
        public static void main(String[] args) {
            Scanner input= new Scanner(System.in);
            int a= input.nextInt(); //to input int
            float b= input.nextFloat();  //to input float
            double c= input.nextDouble(); //to input double
            char d = input.next().charAt(0);//to input characters
            String e=input.next(); //to input a single word
            String f= input.nextLine(); //to input multiple word,ie with space


//        Hard coding the values
            int rollNo=21;
            char character='p';
            float marks=99.99f; //f at the end marks its a float and not double
            double doubleNumber= 23456.77777;
            long longNumber=123456789012345L; //L marks its a Long and not int
            boolean check=true;
            String name="abcd";



//        Type Casting - basically when a higher dataType needs to be converted to smaller dataType
//        float to int
            int num=(int)(23.45);
            System.out.println(num);

//        byte to int
            int z=121;
            byte y=(byte)(z);



//        automatic type promotion in expressions
            int x=257;
            byte w=(byte)(x);
            System.out.println(w); //outputs 1 -- 257 % 256
//Maximum value that can be stored in byte is 256, so as 257 is greater than 156, automatic type conversion happens

//        Example to demonstrate automatic conversion
            byte o=70;
            byte p=40;
            byte q=100;
            int result=a*p/q;
//Here o*p is greater than 256, so conversion happens from byte to int, and then the result is evaluated

            int number='A';
            System.out.println(number);//outputs 97 -- ASCI value of 'A'




//        Java follows unicode principle




        }
    }

