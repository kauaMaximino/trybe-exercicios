#include <stdlib.h>
#include <stdio.h>
#include <math.h>

int main (){
    int A, B, C, k, i, j;

    printf("\nValores de p^p + 2 que sao primos:\n");

    for(i=1;i<=10;i=i+1){
        k=0;
        for(C=2;C<=i-1;C=C+1){
            if(i%C == 0){
                k=k+1;
            }
        }
        if(k==0){
            A=pow(i,i)+2;
            C=2;
            j=0;
            for(C=2;C<=A-1;C++){
                if(A%C == 0){
                    j=j+1;
                }
            }
            if(j == 0){
                printf("\n%i eh primo",i);
            }
        }

    }
    printf("\n\n");
    system("PAUSE");

return 0;
}