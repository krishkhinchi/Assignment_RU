/*
Write a program in C++ to check if a year is 
a leap year or not using input from the user.
*/

#include <iostream>
using namespace std;
int main(){

    int year;
    cout << "Enter Year: ";
    cin >> year;

    if(year%4==0) cout << year << " is a leap year.";
    else cout << year << " is not a leap year.";
    
    return 0;
}
