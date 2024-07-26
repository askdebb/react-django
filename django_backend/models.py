from django.db import models

# Create your models here.


class School(models.Model):
    CIRCUIT_NAME = [
        ("Adjiringanor", "Adjiringanor"),
        ("Nmai Dzorn", "Nmai Dzorn"),
        ("Adenta", "Adenta"),
        ("Botwe", "Botwe")
    ]   
    
    CIRCUIT_SISO = [
        ("Florence Kushitor", "Florence Kushitor"),
        ("Isaac Paintsil", "Isaac Paintsil"),
        ("Joana Kumi", "Joana Kumi"),
        ("Kingsley David", "Kingsley David")
    ]  
    
    LEVEL = [
        ("KG", "Kindergarten"),
        ("PRIMARY", "Primary"),
        ("JHS", "JHS"),
        ("BASIC", "Basic")  
    ]
    
    SCHOOL_TYPE = [
        ("Public", "Public"),
        ("Private", "Private")
    ]
    
    school_name = models.CharField(max_length=100, unique=True, blank=False, default="")
    year_established = models.IntegerField(blank=False, default=1)
    location = models.CharField(max_length=50, blank=False, default="")
    gps_address = models.CharField(max_length=20, default="GD-212-8009")
    headteacher = models.CharField(max_length=50, default="Chris")
    facilitators = models.IntegerField(blank=False, default=1)
    learners = models.IntegerField(blank=False, default=1)
    core_subjects_pst = models.CharField(max_length=5, blank=False, default="")
    circuit_name = models.CharField(max_length=20, choices=CIRCUIT_NAME, default="Adjiringanor")
    siso_name = models.CharField(max_length=50, choices=CIRCUIT_SISO, default="Florence Kushitor")
    level = models.CharField("School Level", max_length=15, choices=LEVEL, default="KG")
    school_type = models.CharField("School Type", max_length=10, choices=SCHOOL_TYPE, default="Public")
    isGalop = models.BooleanField("Is Galop", default=False)
    
    def __str__(self) -> str:
        return self.school_name