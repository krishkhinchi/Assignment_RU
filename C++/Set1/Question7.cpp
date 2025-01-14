/*
Write a program in C++ to find out if the input 
number is Armstrong or not using a loop (User Input).
*/

#include <iostream>
using namespace std;
int main(){

    int num;
    cout << "Enter a number: ";
    cin >> num;

    int sum = 0;
    int temp = num;
    while(num>0){
        int reminder = num%10;
        sum += reminder*reminder*reminder;
        num /= 10;
    }

    if(temp==sum) cout << temp << " is an Armstrong number";
    else cout << temp << " is not an Armstrong number";
    
    return 0;
}