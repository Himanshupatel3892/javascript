function print_num(n){
   if(n > 50){
    return 0;
   }
   else{
    console.log(n);
    n = n+1;
    print_num(n)
   }
}

print_num(1)