# Generated by Django 4.2.1 on 2023-05-31 14:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0008_remove_usermodel_last_login'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usermodel',
            name='username',
        ),
    ]
