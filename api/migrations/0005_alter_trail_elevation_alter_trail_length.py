# Generated by Django 4.0.6 on 2022-07-09 23:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_trail_duration'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trail',
            name='elevation',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='trail',
            name='length',
            field=models.CharField(default='', max_length=50),
        ),
    ]