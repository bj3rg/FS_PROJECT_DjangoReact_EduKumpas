# Generated by Django 5.0.3 on 2024-04-30 10:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0023_alter_representative_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='representative',
            name='user',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.DeleteModel(
            name='CustomUser',
        ),
    ]
