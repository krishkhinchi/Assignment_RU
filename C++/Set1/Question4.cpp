// Write a program in C++ to find out if a number is odd or even using user input.

#include <iostream>
using namespace std;
int main(){
    
    int num;
    cout << "Enter a Number: ";
    cin >> num;

    if(cin.fail()) cout << "Plz enter numeric value";
    else if(num%2==0) cout << num << " is Even Number";
    else cout << num << " is Odd Number";

    return 0;
}