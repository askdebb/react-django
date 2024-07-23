from django.db import models

# Create your models here.

class School(models.Model):
    
       
    CIRCUIT_NAME = {
        ('Adjiringanor', 'Adjiringanor'),
        ('Nmai Dzorn', 'Nmai Dzorn'),
        ('Adenta', 'Adenta'),
        ('Botwe', 'Botwe')
    }   
    
    CIRCUIT_SISO = (
        ('Florence Kushitor', 'Florence Kushitor'),
        ('Isaac Paintsil', 'Isaac Paintsil'),
        ('Joana Kumi', 'Joana Kumi'),
        ('Kingsley David', 'Kingsley David')
    )  
    
    
    LEVEL =  {
        ('KG' , 'Kingdergarten'),
        ('PRIMARY' , 'Primary'),
        ('JHS' , 'JHS'),
        ('BASIC' , 'Basic')  
    }
    
    SCHOOL_TYPE = {
        ('Public' , 'Public'),
        ('Public' , 'Private')
    }
     
    
    school_name = models.CharField(max_length=100, unique=True, null=False)
    circuit_name = models.CharField(max_length=20, choices=CIRCUIT_NAME, default='Adjiringanor')
    siso_name = models.CharField(max_length=50, choices=CIRCUIT_SISO, default='Florence Kushitor')
    level = models.CharField('School Level',max_length=15,choices=LEVEL, default='KG')
    school_type = models.CharField('School Type',max_length=10,choices=SCHOOL_TYPE, default='Public')
    isGALOP =   models.BooleanField('Is Galop')
    
    
    def __str__(self) -> str:
        return self.school_name