$("document").ready(function () {
    var p,o, k,m,zam,z,m,x,dig1,dig2;
    x=0;
    var str=[ [ 16,15,14,12,13,14,15,16 ],[ 11,11,11,11,11,11,11,11 ],[ 10,10,10,10,10,10,10,10 ],[ 10,10,10,10,10,10,10,10 ],[ 10,10,10,10,10,10,10,10 ],[10,10,10,10,10,10,10,10 ],[ 21,21,21,21,21,21,21,21 ],[ 26,25,24,22,23,24,25,26 ]];
for (var i=0;i<8;i++)
{
    for(var g=0;g<8;g++)
    {
        var buto=$("<input/>");
         buto.attr({"type": "button", "id":  i +"x" +g, "class":"but" });
         $("#d").append(buto);
    }
}
var n,y=0,shet1=0,shet2=0,sum1=0;
var rook={};
rook.allblack=function(k,m,l,z)
{
 if (Math.abs(l - k) == Math.abs(z - m))
								{
									if (str[l][z] == 10)
									{
										rook.part1(k,m,l,z);
									}
                                    else
                                    {
                                        if(str[l][z]==11 || str[l][z]==12 || str[l][z]==13 || str[l][z]==14 || str[l][z]==15 || str[l][z]==16)
                                        {
                                            rook.part1(k,m,l,z);
                                        }
                                    }
								}    
}
rook.allwhite=function(k,m,l,z)
{
 if (Math.abs(l - k) == Math.abs(z - m))
								{
									if (str[l][z] == 10)
									{
										rook.part1(k,m,l,z);
									}
                                    else
                                    {
                                        if(str[l][z]==21 || str[l][z]==22 || str[l][z]==23 || str[l][z]==24 || str[l][z]==25 || str[l][z]==26)
                                        {
                                            rook.part1(k,m,l,z);
                                        }
                                    }
								}
}
rook.part1=function(k,m,l,z)
{
    if (l > k && m > z)
										{
											dig1 = k;
											dig2 = m;
											sum= 0;
											for (i = 0;i <(l - k-1);i++)
											{
												dig1++;
												dig2--;
												if (str[dig1][dig2] == 10) sum++;
											}
											if (sum == (l - k-1))
											{
												str[l][z] = n;
												str[k][m] = 10;
											}
										}
										else
										{
											if (k > l && z > m)
											{
												dig1 = k;
												dig2 = m;
												sum = 0;
												for (i = 0;i <(k - l-1);i++)
												{
													dig1--;
													dig2++;
													if (str[dig1][dig2] == 10) sum++;
												}
												if (sum == (k - l-1))
												{
													str[l][z] = n;
												    str[k][m] = 10;
												}
											}
											else
											{
												if (k > l && m > z)
												{
													dig1 = k;
													dig2 = m;
													sum = 0;
													for (i = 0;i <(k - l-1);i++)
													{
														dig1--;
														dig2--;
														if (str[dig1][dig2] == 10) sum++;
													}
													if (sum == (k - l-1))
													{
														str[l][z] = n;
												        str[k][m] = 10;
													}
												}
												else
												{
													if (l > k && z > m)
													{
														dig1 = k;
														dig2 = m;
														sum = 0;
														for (i = 0;i <(l - k-1);i++)
														{
															dig1++;
															dig2++;
															if (str[dig1][dig2] == 10) sum++;
														}
														if (sum == (l - k-1))
														{
															str[l][z] = n;
												            str[k][m] = 10;
														}

													}
												}
											}
										}
}
var elephant={};
elephant.allblack=function(k,m,l,z)
{
 if(k==l)
          {
 if (str[l][z]==10)
{
 elephant.part1(k,m,l,z); 
}
 else
{
    if(str[l][z]==11 || str[l][z]==12 || str[l][z]==13 || str[l][z]==14 || str[l][z]==15 || str[l][z]==16)
        {
            elephant.part1(k,m,l,z); 
        }
}
          }
          else 
          {
              if (m==z)
              {
                  if (str[l][z]==10)
                  {
                      elephant.part2(k,m,l,z);
                  }
                  else
                    {
                     if(str[l][z]==11 || str[l][z]==12 || str[l][z]==13 || str[l][z]==14 || str[l][z]==15 || str[l][z]==16)
                        {
                         elephant.part2(k,m,l,z); 
                        }
                    }
              }
          }
   
}
elephant.allwhite=function(k,m,l,z)
{
 if(k==l)
          {
 if (str[l][z]==10)
{
 elephant.part1(k,m,l,z); 
}
 else
{
    if(str[l][z]==21 || str[l][z]==22 || str[l][z]==23 || str[l][z]==24 || str[l][z]==25 || str[l][z]==26)
        {
            elephant.part1(k,m,l,z); 
        }
}
          }
          else 
          {
              if (m==z)
              {
                  if (str[l][z]==10)
                  {
                      elephant.part2(k,m,l,z);
                  }
                  else
                    {
                     if(str[l][z]==21 || str[l][z]==22 || str[l][z]==23 || str[l][z]==24 || str[l][z]==25 || str[l][z]==26)
                        {
                         elephant.part2(k,m,l,z); 
                        }
                    }
              }
          }
}
elephant.part1=function(k,m,l,z)
{
     if (z>m)
    {
sum=0;
for (i = m + 1;i < z;i++)
{
if (str[l][i] == 10) sum++;
}
if (sum == (z - m-1))
{
str[l][z] = n;
str[k][m] = 10;
}
    }
    if (z<m)
    {
        sum=0;
        for (i = m -1 ;i > z;i--)
        {
        if (str[l][i] == 10) sum++;
        }
        if (sum == (m - z-1))
        {
        str[l][z] = n;
        str[k][m] = 10;
        }
    }
}
elephant.part2=function(k,m,l,z)
{
if (l>k)
                      {
                          sum=0;
                          for (i=k+1;i<l;i++)
                          {
                              if (str[i][m]==10)sum++; 
                          }
                          if (sum==(l-k-1))
                          {
                            str[l][z] = n;
                            str[k][m] = 10;  
                          }
                      }
                      if (l<k)
                      {
                         sum=0;
                          for (i=k-1;i>l;i--)
                          {
                              if (str[i][m]==10)sum++; 
                          }
                          if (sum==(k-l-1))
                          {
                            str[l][z] = n;
                            str[k][m] = 10;  
                          }  
                      }
}
var horse={};
horse.part1=function(k,m,l,z)
{
if(p==2 && o==1)
{
    str[l][z]=n;
    str[k][m]=10;
}
else 
{
    if(p==1 && o==2)
    {
        str[l][z]=n;
    str[k][m]=10;
    }
}    
}
horse.white=function(k,m,l,z)
{
 p=Math.abs(k-l);
           o=Math.abs(m-z);
          if (str[l][z]==10)
          {
            horse.part1(k,m,l,z);
          }
          if(str[l][z]==21 || str[l][z]==22 || str[l][z]==23 || str[l][z]==24 || str[l][z]==25 || str[l][z]==26)
          {
            horse.part1(k,m,l,z);
          }
}
horse.black=function(k,m,l,z)
{
    p=Math.abs(k-l);
           o=Math.abs(m-z);
          if (str[l][z]==10)
          {
            horse.part1(k,m,l,z);
          }
          if(str[l][z]==11 || str[l][z]==12 || str[l][z]==13 || str[l][z]==14 || str[l][z]==15 || str[l][z]==16)
          {
            horse.part1(k,m,l,z);
          }

}
var pawn={};
pawn.white=function(k,m,l,z) 
{
    if (str[k+1][m]==10)
{
    if(m==z && l<k+2 && l>k)
    {
        shet1++;
            str[l][z]=n;
            str[k][m]=10;
    }
}
if (str[k+2][m]==10)
{
    if(m==z && l<k+3 && l>k)
    {
        shet1++;
        if(shet1==1 )
        {
            str[l][z]=n;
            str[k][m]=10;
        }
    }
}
if (l==k+1)
{
    if(z==m+1 || z==m-1)
    {
        if(str[l][z]==21 || str[l][z]==22 || str[l][z]==23 || str[l][z]==24 || str[l][z]==25 || str[l][z]==26)
        {
            str[l][z]=n;
            str[k][m]=10;
        }
    }
}
}
pawn.black=function(k,m,l,z)
{
    if (str[k-1][m] == 10 || str[k-2][m] == 10)
							{
								if (m == z && l > k - 2 && l<k)
								{
									shet2++;
										str[l][z] = n;
										str[k][m] = 10;
								}
								else
								{
									if (m == z && l > k - 3 && l<k)
									{
										shet2++;
										if (shet2 == 1)
										{
											str[l][z] = n;
											A[k][m] = 10;
										}
									}
								}
							}
                            if (l==k-1)
{
    if(z==m+1 || z==m-1)
    {
        if(str[l][z]==11 || str[l][z]==12 || str[l][z]==13 || str[l][z]==14 || str[l][z]==15 || str[l][z]==16)
        {
            str[l][z]=n;
            str[k][m]=10;
        }
    }
}
}
var click={}
    click.assign1=function ()
    {
x=x+1;
y=0;
if(x % 2==0)
{
zam=this.id;
l=zam[0];
z=zam[2];
l=parseInt(l);
z=parseInt(z);
y++;
}
else
{
zam=this.id;
k=zam[0];
m=zam[2];
k=parseInt(k);
m=parseInt(m);
}
if (y==1)
{
     click.assign2(k,m,l,z);
} 
    }
    click.assign2=function(k,m,l,z) 
    {
      dig1=dig2=0;
      n=str[k][m];
      switch (n)
      {
          case 11:
          pawn.white(k,m,l,z);
          break;
          case 12:
          rook.allwhite(k,m,l,z);
          elephant.allwhite(k,m,l,z);
          break;
          case 13:
          break;
          case 14:
          rook.allwhite(k,m,l,z);
          break;
          case 15:
          horse.white(k,m,l,z);
          break;
          case 16:
          elephant.allwhite(k,m,l,z);
          break;
      } 
      console.log(str);
      for(i=0;i<7;i++)
      {
          for(g=0;g<7;g++)
          {
              if (str[i][g]==11) 
              {
                   var $chekB = $("<div>");
                    $chekB.attr({ "class": "chek", "id": "x" + i + "y" + g });
                   $("#d").append($chekB);

              } 
          }
      }
    }
$('#0x0').bind('click',click.assign1);
$('#0x1').bind('click',click.assign1);
$('#0x2').bind('click',click.assign1);
$('#0x3').bind('click',click.assign1);
$('#0x4').bind('click',click.assign1);
$('#0x5').bind('click',click.assign1);
$('#0x6').bind('click',click.assign1);
$('#0x7').bind('click',click.assign1);
$('#1x0').bind('click',click.assign1);
$('#1x1').bind('click',click.assign1);
$('#1x2').bind('click',click.assign1);
$('#1x3').bind('click',click.assign1);
$('#1x4').bind('click',click.assign1);
$('#1x5').bind('click',click.assign1);
$('#1x6').bind('click',click.assign1);
$('#1x7').bind('click',click.assign1);
$('#2x0').bind('click',click.assign1);
$('#2x1').bind('click',click.assign1);
$('#2x2').bind('click',click.assign1);
$('#2x3').bind('click',click.assign1);
$('#2x4').bind('click',click.assign1);
$('#2x5').bind('click',click.assign1);
$('#2x6').bind('click',click.assign1);
$('#2x7').bind('click',click.assign1);
$('#3x0').bind('click',click.assign1);
$('#3x1').bind('click',click.assign1);
$('#3x2').bind('click',click.assign1);
$('#3x3').bind('click',click.assign1);
$('#3x4').bind('click',click.assign1);
$('#3x5').bind('click',click.assign1);
$('#3x6').bind('click',click.assign1);
$('#3x7').bind('click',click.assign1);
$('#4x0').bind('click',click.assign1);
$('#4x1').bind('click',click.assign1);
$('#4x2').bind('click',click.assign1);
$('#4x3').bind('click',click.assign1);
$('#4x4').bind('click',click.assign1);
$('#4x5').bind('click',click.assign1);
$('#4x6').bind('click',click.assign1);
$('#4x7').bind('click',click.assign1);
$('#5x0').bind('click',click.assign1);
$('#5x1').bind('click',click.assign1);
$('#5x2').bind('click',click.assign1);
$('#5x3').bind('click',click.assign1);
$('#5x4').bind('click',click.assign1);
$('#5x5').bind('click',click.assign1);
$('#5x6').bind('click',click.assign1);
$('#5x7').bind('click',click.assign1);
$('#6x0').bind('click',click.assign1);
$('#6x1').bind('click',click.assign1);
$('#6x2').bind('click',click.assign1);
$('#6x3').bind('click',click.assign1);
$('#6x4').bind('click',click.assign1);
$('#6x5').bind('click',click.assign1);
$('#6x6').bind('click',click.assign1);
$('#6x7').bind('click',click.assign1);
$('#7x0').bind('click',click.assign1);
$('#7x1').bind('click',click.assign1);
$('#7x2').bind('click',click.assign1);
$('#7x3').bind('click',click.assign1);
$('#7x4').bind('click',click.assign1);
$('#7x5').bind('click',click.assign1);
$('#7x6').bind('click',click.assign1);
$('#7x7').bind('click',click.assign1);    
});

