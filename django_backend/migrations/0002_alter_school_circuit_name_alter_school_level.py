# Generated by Django 5.0.7 on 2024-07-26 08:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('django_backend', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='school',
            name='circuit_name',
            field=models.CharField(choices=[('Nmai Dzorn', 'Nmai Dzorn'), ('Botwe', 'Botwe'), ('Adjiringanor', 'Adjiringanor'), ('Adenta', 'Adenta')], default='Adjiringanor', max_length=20),
        ),
        migrations.AlterField(
            model_name='school',
            name='level',
            field=models.CharField(choices=[('KG', 'Kingdergarten'), ('BASIC', 'Basic'), ('JHS', 'JHS'), ('PRIMARY', 'Primary')], default='KG', max_length=15, verbose_name='School Level'),
        ),
    ]
