/*
Write a program in C++ to find out if a number 
is divisible by 5 and 7 using an if-else statement.
*/

#include <iostream>
using namespace std;
int main(){

    int num;
    cout << "Enter a Number: ";
    cin >> num;

    if(cin.fail()) cout << "Plz enter numeric value";
    else if(num%5==0&&num%7==0) cout << num << " is Divisible by 5 and 7 both";
    else if(num%5==0) cout << num << " is Divisible by 5 but not by 7";
    else if(num%7==0) cout << num << " is Divisible by 7 but not by 5";
    else cout << num << " is not Divisible by 5 or 7";

    return 0;
}