#Preposition
import discord
import random
from discord.ext import commands

# Initialize bot
intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix="?", intents=intents)

# Ping Pong command
@bot.command()
async def lebe(ctx):
    await ctx.send("Hai!, Nandesuka?")

# Sisters command
@bot.command()
async def lebesister(ctx):
    await ctx.send("Ah... it's EX-001 or If Kierra would called it Chilia(Chi-chan)")

# Multiple other funfact commands can be added in a similar fashion
@bot.command()
async def lebefunfacts(ctx):
    funfacts = [
        "My name Lebe came from German name Leberecht maaß",
        "My name came from Z1 destroyer who namesake is Leberecht maaß...",
        "You know my name actually boys name in Germany, and Kira makes it works"
    ]
    await ctx.send(random.choice(funfacts))

# Kierra funfacts command
@bot.command()
async def kierrafunfacts(ctx):
    funfacts = [
        "Kierra has 5 waifu in-game, which is upsets me.",
        "Kierra like Azur lane because this the only game he play where he can marry a character..."
    ]
    await ctx.send(random.choice(funfacts))

# Dice roll command
@bot.command()
async def dice(ctx):
    result = random.randint(1, 6)
    await ctx.send(f"{result} Shikikan-sama")

# Kick command with permission check
@bot.command()
async def kick(ctx, member: discord.Member = None):
    if ctx.author.guild_permissions.kick_members:
        if member:
            await member.kick()
            await ctx.send(f"Kicked {member.user.username}!")
        else:
            await ctx.send("Dare ga?")
    else:
        await ctx.send("You don't have permission to kick members!")

# Ban command with permission check
@bot.command()
async def ban(ctx, member: discord.Member = None):
    if ctx.author.guild_permissions.ban_members:
        if member:
            await member.ban()
            await ctx.send(f"Banned {member.user.username}!")
        else:
            await ctx.send("Dare ga?")
    else:
        await ctx.send("You don't have permission to ban members!")

@bot.command()
async def secret(ctx):
    # Replace this with the specific user's Discord ID
    maker_id = "Kiraschm1dt"  # Example ID, replace with actual
    allowed_user_ids = ["Server_Booster","Server_Donator"]
    # Proceed with command


    # Check if the command's author is the allowed user
    if ctx.author.id == maker_id:
        await ctx.send(f"Konnichiwa Goshujin sama")
    elif ctx.author.id == allowed_user_ids:
        await ctx.send(f"Konnichiwa {ctx.author.name}")
    else:
        await ctx.send("Konnichiwa")

# Purge command
@bot.command()
async def purge(ctx, amount: int):
    # Check if the user has permission to manage messages
    if ctx.author.guild_permissions.manage_messages:
        await ctx.message.delete()

        # Purge the specified number of messages + 1 (to account for the bot's additional deletion)
        deleted = await ctx.channel.purge(limit=amount + 1)

        # Notify that the action is complete
        confirmation_message = await ctx.send(f"Action complete: Deleted {len(deleted) - 1} messages!")
        
        # Delete the bot's notification message after 30 seconds
        await confirmation_message.delete(delay=10)
    else:
        # Notify user if they don't have the required permissions
        warning_message = await ctx.send("You don't have permission to manage messages!")
        await warning_message.delete(delay=60)  # Delete warning after 1 minute

# Kill command (mentions a user and sends a death message)
@bot.command()
async def kill(ctx, member: discord.Member = None):
    if member:
        await ctx.send(f"{member} Died")
    else:
        await ctx.send("Dare desuka?")

# Custom embed and image commands
@bot.command()
async def introduction(ctx):
    embed = discord.Embed(title="Konichiwa, Lebe-desu", description="Watashi wa, Kierra-sama no puraibeto meido desu. Yoroshiku ne!")
    embed.set_author(name="Leberecht maaß", icon_url="Image_ID")
    embed.set_footer(text="Prototype_Maid_Swoopy")
    await ctx.send(embed=embed)

@bot.command()
async def howdoyoulook(ctx):
    image_url = "Image Link"
    await ctx.send(image_url)

# Event for new member joining
@bot.event
async def on_member_join(member):
    if member.guild.id in ["Server_ID"]: #
        channel = discord.utils.get(member.guild.channels, id="Channel_ID")  #Channel ID
        if channel:
            await channel.send(f"Irasshaimasen {member}!")

# On bot ready event
@bot.event
async def on_ready():
    activity = discord.Game("On ACTIVE Development")
    await bot.change_presence(activity=activity, status=discord.Status.do_not_disturb)
    print(f"Logged in as {bot.user}")

# Run the bot
bot.run("Bot_Token")